const jobModel = require('../../models/jobSchema');
const getAll = async (req,res) =>{
    try {
        const job = await jobModel.find({});
        if (!job) {
          return res.status(401).json({ msg: "No Job" }); // 401 Unauthorized
        }
        return res.json(job);
      } catch (err) {
        return res.status(500).json({ msg: "Internal Server Error" }); // 500 Internal Server Error
      }
}
module.exports = { getAll }