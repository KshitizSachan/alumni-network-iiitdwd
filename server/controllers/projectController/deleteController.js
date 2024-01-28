const projectModel = require('../../models/projectSchema');
const remove = async (req,res) =>{
    try{
        const { projectID } = req.body;
        const project = await projectModel.deleteOne({ projectID: projectID });
        if (!project.deletedCount) {
            return res.status(404).json({ msg: "Project not found" });
          }
        return res.status(204)// 204 No Content
    }
    catch(err){
        console.log(err)
        res.status(500).json({ msg: "Failed To Delete Project" ,err});// 500 Internal Server Error
    }
}
module.exports = { remove }