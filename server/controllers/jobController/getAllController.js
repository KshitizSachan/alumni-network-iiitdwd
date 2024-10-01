const jobModel = require('../../models/jobSchema');
const jwt = require('jsonwebtoken');

const getAll = async (req,res) =>{

  const token = req.headers.authorization;
  let user_rank=4;

  if (!token) {
    user_rank=4;
  }else{
     const decoded = jwt.verify(token, process.env.jwtPassword);
     user_rank = decoded.rank;
  }

    try {
        let jobs = await jobModel.find({});

        if (!jobs) {
          return res.status(401).json({ msg: "No Job" }); // 401 Unauthorized
        }

      if (user_rank > 3) {
        // Mask sensitive fields for rank > 3
        jobs = jobs.map(job => ({
          ...job.toObject(),
          stipend: "XXXXXX",
          eligibleBatch: ["x", "x", "x"],
          startDate: "XXXXXXXXX",
          floatedBy: "XXXXXX"
        }));
      } else if (user_rank === 3) {
        // Only mask 'floatedBy' for rank == 3
        jobs = jobs.map(job => ({
          ...job.toObject(),
          floatedBy: "XXXXXX"
        }));
      }

        return res.json(jobs);
      } catch (err) {
        return res.status(500).json({ msg: "Internal Server Error" }); // 500 Internal Server Error
      }
}
module.exports = { getAll }