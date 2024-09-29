const userModel = require("../../models/userSchema");

const getByToken = async (req, res) => {
  try {
    const { userID } = req.user;
//    console.log('userID:', req.user)
    const user = await userModel.findOne({userID: userID});
    if (!user) {
      return res.status(404).json({msg: "User Not Found"}); // 404 Not Found
    }
    return res.status(200).json({status: true, user: user});
  } catch (error) {
    console.error("Error in getByTokenController:", error);
    return res.status(500).json({msg: "Server Error"}); // 500 Internal Server Error
  }
};

module.exports = { getByToken };