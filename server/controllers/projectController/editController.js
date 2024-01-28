const projectModel = require('../../models/projectSchema');
const edit = async (req,res) =>{
    const { projectID, floatedBy, title, category, handler, whatsappNo, description, techStack, appliedBy } = req.body;
    try {
        const project = await projectModel.findOne({ projectID });
        if (!project) {
          return res.status(401).json({ msg: "Project Not Found" });
        }
        const update = {
        floatedBy, title, category, handler, whatsappNo, description, 
          techStack: techStack ? [...project.techStack,...(techStack instanceof Array ? techStack : [techStack])] : project.techStack,
          appliedBy: appliedBy ? [...project.appliedBy,...(appliedBy instanceof Array ? appliedBy : [appliedBy])] : project.appliedBy,
        };
        const updatedProject = await projectModel.findOneAndUpdate(
          { projectID },
          update,
          { new: true }
        );
        res.json({UpdatedProject:updatedProject}); 
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: "An error occurred while updating the document", err });
    }
}
module.exports = { edit }