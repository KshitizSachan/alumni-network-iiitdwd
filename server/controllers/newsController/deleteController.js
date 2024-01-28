const newsModel = require('../../models/newsSchema');
const remove = async (req,res) =>{
    try{
        const { newsID } = req.body;
        const news = await newsModel.deleteOne({ newsID: newsID });
        if (!news.deletedCount) {
            return res.status(404).json({ msg: "News not found" });
          }
        return res.status(204).json({msg:"News Deleted Succesfully."})// 204 No Content
    }
    catch(err){
        console.log(err)
        res.status(500).json({ msg: "Failed To Delete News" ,err});// 500 Internal Server Error
    }
}
module.exports = { remove }