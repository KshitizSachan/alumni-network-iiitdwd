const newsModel = require('../../models/newsSchema');
const get = async (req,res) =>{
    const { newsID } = req.body;
    const news = await newsModel.findOne({newsID:newsID});
    if(!news){
        return res.status(401).json({msg:"News Not Found"});//401 Unauthorized
    }
    return res.json(news);
}
module.exports = { get }