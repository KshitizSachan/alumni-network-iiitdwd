const userModel = require("../../models/userSchema");

const getAll = async (req, res) => {


  try {

    if(req.user_rank >= 3){
      return res.status(200).json([]);
    }

    const users = await userModel.find({ rank: 1 }); // Only fetch users with rank = 1
    if (!users.length) {
      return res.status(404).json({ msg: "No Users" }); // 404 Not Found
    }
    return res.json(users);
  } catch (err) {
    return res.status(500).json({ msg: "Internal Server Error" }); // 500 Internal Server Error
  }
}

module.exports = { getAll };
