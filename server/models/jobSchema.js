const mongoose = require('mongoose');

//-------------------------------------------------Defining Job Schema------------------------------------------------
const jobSchema = new mongoose.Schema({
    jobID: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId, // Automatically generates a unique identifier
    },
    floatedBy: {
        type: String,
        required: true
    },
    appliedBy:{
        type: [String]
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
        required: true
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
        required: true,
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
        type: [Number]
    },
    stipend: {
        type: Number,
        required: true
    }
});

const jobModel = mongoose.model('jobs', jobSchema);
module.exports = jobModel;