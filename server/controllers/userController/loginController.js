const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const userModel = require("../../models/userSchema");

const login = async (req, res) => {
    const { email, password, rank } = req.body;
    const user = await userModel.findOne({email : email});
    if(!user)
    {
      return res.status(401).json({msg:"No Account Associated With The E-Mail"}) //401 Unauthorized
    }
    if(user.verificationStatus === 0){
      return res.status(401).json({msg:"Account Verification Pending."});  //401 Unauthorized
    }
    if(user.rank != rank)
    {
        return res.status(401).json({msg:"Wrong Account Type Selected"}); //401 Unauthorized
    }
    bcrypt.compare(password, user.password, async (err, result) => {
        if(!result) {
          return res.status(401).json({ msg: "Incorrect Password:" }); //401 Unauthorized
        }
        else {
            try {
                const token = jwt.sign({ email: email, rank: rank, userID: user.userID }, process.env.jwtPassword, {
                  expiresIn: "4d"
                });
                return res.status(201).json({ status: true, msg: "Logged In Successfully", token, userID: user.userID }); // 201 Created with token
              } catch (err) {
                return res.status(500).json({ status: false, msg: "Error Generating JWT:", err }); // 500 Internal Server Error
              }
        } 
    });
}
module.exports = { login };