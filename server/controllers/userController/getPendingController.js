const userModel = require("../../models/userSchema");
const getPending = async (req, res) =>{
    try {
        const users = await userModel.find({verificationStatus:0});
        if (!users) {
          return res.status(404).json({ msg: "Not Found" }); // 404 Not Found
        }
        return res.json(users);
      } catch (err) {
        return res.status(500).json({ msg: "Internal Server Error" }); // 500 Internal Server Error
      }
}
module.exports = { getPending }