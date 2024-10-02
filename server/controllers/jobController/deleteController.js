const jobModel = require('../../models/jobSchema');
const remove = async (req,res) =>{
    try{
        const { jobID } = req.body;
        const job = await jobModel.deleteOne({ jobID: jobID });
        if (!job.deletedCount) {
            return res.status(404).json({ msg: "Job not found" });
          }
        return res.status(204).json({msg:"Jobs Deleted Succesfully."})// 204 No Content
    }
    catch(err){
        console.log(err)
        res.status(500).json({ msg: "Failed To Delete Job" ,err});// 500 Internal Server Error
    }
}
module.exports = { remove }