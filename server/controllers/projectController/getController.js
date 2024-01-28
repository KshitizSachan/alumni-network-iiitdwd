const projectModel = require('../../models/projectSchema');
const get = async (req,res) =>{
    const { projectID } = req.body;
    const project = await projectModel.findOne({projectID:projectID});
    if(!project){
        return res.status(401).json({msg:"Project Not Found"});//401 Unauthorized
    }
    return res.json(project);
}
module.exports = { get }