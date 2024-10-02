const jobModel = require('../../models/jobSchema');


const edit = async (req,res) =>{
    const { jobID, floatedBy, floatedByID, title,appliedBy, category, handler, whatsappNo, startDate, referral, jobLocation, companyName, eligibleBatch, stipend, jobURL } = req.body;
    try {
        const date = startDate instanceof Date ? startDate : Date(startDate);
        const job = await jobModel.findOne({ jobID });
        if (!job) {
          return res.status(401).json({ msg: "Job Not Found" });
        }
        const update = {
            jobID, floatedBy, floatedByID, title, category, jobURL, handler, whatsappNo, referral, jobLocation, companyName, stipend,
          appliedBy: appliedBy ? [...(appliedBy instanceof Array ? appliedBy : [appliedBy])] : job.appliedBy,
          eligibleBatch: eligibleBatch ? [...(eligibleBatch instanceof Array ? eligibleBatch : [eligibleBatch])] : job.eligibleBatch,
          startDate: date
        };
        const updatedJob = await jobModel.findOneAndUpdate(
          { jobID },
          update,
          { new: true }
        );
        res.json({UpdatedJob:updatedJob}); 
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: "An error occurred while updating the document", err });
    }
}
module.exports = { edit }