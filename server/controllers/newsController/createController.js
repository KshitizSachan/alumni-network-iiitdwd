const newsModel = require('../../models/newsSchema');
const create = async (req,res) =>{
    const { floatedBy, title, description, tags, link } = req.body;
    try{
        await newsModel.create({
            floatedBy:floatedBy,
            title:title,
            description:description,
            tags:tags,
            link:link
        });
        return res.status(201).json({msg:"News Published Successfully."});// 201 Created
    }
    catch (err) {
        if (err.name === 'ValidationError') { // Check for validation errors
          return res.status(422).json({ msg: err.message }); // 422 Unprocessable Entity
        } else {
          return res.status(500).json({ msg: "Internal Server Error:", err }); // 500 Internal Server Error
        }
      }
}
module.exports = { create }