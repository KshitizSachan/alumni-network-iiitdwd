const userModel = require("../../models/userSchema");
const getAll = async (req, res) =>{
    try {
        const users = await userModel.find({});
        if (!users) {
          return res.status(401).json({ msg: "No Users" }); // 401 Unauthorized
        }
        return res.json(users);
      } catch (err) {
        return res.status(500).json({ msg: "Internal Server Error" }); // 500 Internal Server Error
      }
}
module.exports = { getAll }