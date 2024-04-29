const jobModel = require('../../models/jobSchema');
const create = async (req,res) =>{
    const { floatedBy, floatedByID, title, category, handler, whatsappNo, startDate, referral, jobLocation, companyName, eligibleBatch, stipend, jobURL } = req.body;
    try{
        await jobModel.create({
            floatedBy:floatedBy,
            floatedByID:floatedByID,
            title:title,
            category: category,
            handler: handler,
            whatsappNo: whatsappNo,
            startDate: startDate,
            referral: referral,
            jobLocation: jobLocation,
            companyName: companyName,
            eligibleBatch: eligibleBatch,
            stipend: stipend,
            jobURL: jobURL
        });
        return res.status(201).json({msg:"Job Floated Successfully."});// 201 Created
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