const mongoose = require('mongoose');

//-------------------------------------------------Defining Project Schema------------------------------------------------
const projectSchema = new mongoose.Schema({
    projectID: {
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
        type: String,
        enum: [],// Yet to be filled
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
    whatsappNo: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 10
    },
    description: {
        type: String,
        required: true,
        minLength:5,//Yet to be finalized
        maxLength:100//Yet to be finalized
    },
    techStack: {
        type: [String],
        required: true
    }
});

const projectModel = mongoose.model('projects', projectSchema);
module.exports = projectModel;