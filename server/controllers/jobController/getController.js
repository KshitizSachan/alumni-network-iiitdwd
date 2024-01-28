const jobModel = require('../../models/jobSchema');
const get = async (req,res) =>{
    const { jobID } = req.body;
    const job = await jobModel.findOne({jobID:jobID});
    if(!job){
        return res.status(401).json({msg:"Job Not Found"});//401 Unauthorized
    }
    return res.json(job);
}
module.exports = { get }