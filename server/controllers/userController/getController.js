const userModel = require("../../models/userSchema");
const get = async (req, res) =>{
    const { userID } = req.body;
    const user = await userModel.findOne({userID:userID});
    if(!user){
        return res.status(401).json({msg:"User Not Found"});//401 Unauthorized
    }
    return res.json(user);
    
}
module.exports = { get }