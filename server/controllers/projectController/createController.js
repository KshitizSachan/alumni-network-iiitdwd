const projectModel = require('../../models/projectSchema');
const create = async (req,res) =>{
    const { floatedBy, title, category, handler, whatsappNo, description, techStack } = req.body;
    try{
        await projectModel.create({
            floatedBy:floatedBy,
            title:title,
            description:description,
            category: category,
            handler: handler,
            whatsappNo: whatsappNo,
            techStack: techStack
        });
        return res.status(201).json({msg:"Project Floated Successfully."});// 201 Created
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