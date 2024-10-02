const mongoose = require('mongoose');
const currentYear = new Date().getFullYear() % 100;// Required for calculating batch year max limit.
//-------------------------------------------------Defining Job Schema------------------------------------------------
const jobSchema = new mongoose.Schema({
    jobID: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    floatedBy: {
        type: String,
        required: true
    },
    floatedByID: {
        type: String,
        required: true
    },
    appliedBy:{
        type: [String],
        default:[]
    },
    title: {
    type: String,
    required: true
    },
    category: {
        type: Number,
        enum: [0,1],// 0->Job and 1->Internship
        required: true
    },
    handler: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    startDate: {
        type: Date
    },
    whatsappNo: {
        type: String,
        minLength: 10,
        maxLength: 10
    },
    referral: {
        type: Boolean,
        default: 0
    },
    jobLocation: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    eligibleBatch: {
        type: [Number],
        min: 20,
        max: currentYear+4
    },
    stipend: {
        type: Number,
        required: true
    },
    jobURL:{
        type: String
    }
});

const jobModel = mongoose.model('jobs', jobSchema);
module.exports = jobModel;