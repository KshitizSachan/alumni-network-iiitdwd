const newsModel = require('../../models/newsSchema');
const edit = async (req,res) =>{
    const { newsID, floatedBy, title, description, tags, link } = req.body;
    try {
        const news = await newsModel.findOne({ newsID });
        if (!news) {
          return res.status(401).json({ msg: "News Not Found" });
        }
        const update = {
          floatedBy, title, description, link,
          tags: tags ? [...news.tags,...(tags instanceof Array ? tags : [tags])] : news.tags
        };
        const updatedNews = await newsModel.findOneAndUpdate(
          { newsID },
          update,
          { new: true }
        );
        res.json({UpdatedNews:updatedNews});
      } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "An error occurred while updating the document", err });
      }
}
module.exports = { edit }