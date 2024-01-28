const newsModel = require('../../models/newsSchema');
const getAll = async (req,res) =>{
    try {
        const news = await newsModel.find({});
        if (!news) {
          return res.status(401).json({ msg: "No News" }); // 401 Unauthorized
        }
        return res.json(news);
      } catch (err) {
        return res.status(500).json({ msg: "Internal Server Error" }); // 500 Internal Server Error
      }
}
module.exports = { getAll }