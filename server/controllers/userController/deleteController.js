const userModel = require("../../models/userSchema");
const remove = async (req, res) =>{
    try{
        const { userID } = req.body;
        const user = await userModel.deleteOne({ userID: userID });
        if (user.deletedCount===0) {
            return res.status(404).json({ msg: "User not found" });
          }
        return res.status(204).end();// 204 No Content
    }
    catch(err){
        console.log(err)
        res.status(500).json({ msg: "Failed to delete account" ,err});// 500 Internal Server Error
    }
}
module.exports = { remove }