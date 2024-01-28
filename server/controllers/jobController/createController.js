const jobModel = require('../../models/jobSchema');
const create = async (req,res) =>{
    const { floatedBy, title, category, handler, whatsappNo, startDate, referral, jobLocation, companyName, eligibleBatch, stipend } = req.body;
    const date = startDate instanceof Date ? startDate : Date(startDate);
    try{
        await jobModel.create({
            floatedBy:floatedBy,
            title:title,
            category: category,
            handler: handler,
            whatsappNo: whatsappNo,
            startDate: date,
            referral: referral,
            jobLocation: jobLocation,
            companyName: companyName,
            eligibleBatch: eligibleBatch,
            stipend: stipend
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