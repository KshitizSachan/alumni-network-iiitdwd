const userModel = require("../../models/userSchema");
const get = async (req, res) =>{
    const { userID } = req.body;
    const user = await userModel.findOne({userID:userID});
    if(!user){
        return res.status(404).json({msg:"User Not Found"});// 404 Not Found
    }
    return res.json(user);
    
}
module.exports = { get }