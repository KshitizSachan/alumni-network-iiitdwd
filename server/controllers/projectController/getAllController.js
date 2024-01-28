const projectModel = require('../../models/projectSchema');
const getAll = async (req,res) =>{
    try {
        const project = await projectModel.find({});
        if (!project) {
          return res.status(401).json({ msg: "No Project" }); // 401 Unauthorized
        }
        return res.json(project);
      } catch (err) {
        return res.status(500).json({ msg: "Internal Server Error" }); // 500 Internal Server Error
      }
}
module.exports = { getAll }