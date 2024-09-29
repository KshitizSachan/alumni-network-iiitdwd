const jobModel = require('../../models/userSchema');
const userModel = require('../../models/userSchema');


const createRequest = async (req,res) =>{
  const { jobID, floatedByID, title, company } = req.body;
  const appliedBy = req.user.userID;

//  console.log('jobId:', jobID);
//  console.log('floatedByID:', floatedByID);
//  console.log('title:', title);
//  console.log('appliedBy:', appliedBy);
//  console.log('req.user: ', req.user);

  try {
    // Check if the job exists

//    const job = await jobModel.findOne({ jobID: jobID });
//    if (!job) {
//      return res.status(404).json({ msg: "Job Not Found" });
//    }

    // Check if the floatedBy user exists
    const floatedByUser = await userModel.findOne({ userID: floatedByID });
    if (!floatedByUser) {
      return res.status(404).json({ msg: "User who floated the job not found" });
    }

    // Check if a notification for this job from the same user already exists
    const existingNotification = floatedByUser.notifications.find(
      (notification) => notification.type === "Referral Request" && notification.userID === appliedBy && notification.objID === jobID
    );

    if (existingNotification) {
      return res.status(400).json({ msg: "Referral request already pending for this job." });
    }

    // Create a new notification
    const newNotification = {
      type: "Referral Request",
      name: "Referral request by " + req.user.email + " for " + title + " in " + company, // Name of the user making the request
      userID: appliedBy, // ID of the user making the request
      objID: jobID, // Job ID
    };

    floatedByUser.notifications.push(newNotification);
    await floatedByUser.save();

    res.status(200).json({ msg: "Referral request successfully sent" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "An error occurred while processing the request", err });
  }

}
module.exports = { createRequest }