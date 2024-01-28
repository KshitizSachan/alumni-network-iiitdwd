const mongoose = require('mongoose');
const currentYear = new Date().getFullYear() % 100;// Required for calculating batch year max limit. 

//------------------------------------------------Subschema for notifications----------------------------------------
const notificationSchema = new mongoose.Schema({
    type: String,
    name: String,
    userID: String,
    objID: String
  });

//------------------------------------------------Default Notifications----------------------------------------------
const defaultNotification = {
    type: "Account Creation",
    name: "admin",
    objID: "Yahoo! Account Created."
  };
//------------------------------------------------Subschema for jobLocation----------------------------------------
// const jobLocationSchema = new mongoose.Schema({
//     city: String,
//     state: String,
//   });

//-------------------------------------------------Defining User Schema------------------------------------------------
const userSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
      },
    name: {
            type: String,
            required: true,
            minlength: 3,
    },
    email: {
            type: String,
            required: true,
            unique: true,
            validate: {
            validator: function (value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Example: Check if the email is in a valid format
            return emailRegex.test(value);
            },
            message: 'Invalid email format',
            }
    },
    password: {
            type: String,
            required: true
    },
    createdAt: {
            type: Date,
            default: Date.now
    },
    rank: {
            type: Number,
            required: true,
            enum: [0,1,2,3]
    },
    profilePicURL: {
        type: String,
        //default: "" // Yet to be filled
    },
    githubURL: {
        type: String,
        // unique: true
    },
    xURL: {
        type: String,
        // unique: true
    },
    linkedinURL: {
        type: String,
        // unique: true
    },
    branch: {
        type: String
    },
    batch: {
        type: Number,
        min: 20,
        max: currentYear+4
    },
    notifications: {
        type: [notificationSchema],
        default: [defaultNotification]
    },
    jobLocation: String,
    companyName: {
        type: String
    },
    position: {
        type: String
    },
    floatedProjects: {
        type: [String]
    },
    floatedJobs: {
        type: [String]
    },
    offeredReferrals: {
        type: [String]
    }
});

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;