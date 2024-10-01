const mongoose = require('mongoose');

//-------------------------------------------------Defining News Schema------------------------------------------------
const newsSchema = new mongoose.Schema({
    newsID: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    floatedBy: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        minLength:5,//Yet to be finalized
        maxLength:100//Yet to be finalized
    },
    description: {
        type: String,
        required: true,
        minLength:5,//Yet to be finalized
        maxLength:500//Yet to be finalized
    },
    tags: {
        type: [String]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    link: {
        type: String,
        required: true,
    }
});

const newsModel = mongoose.model('news', newsSchema);
module.exports = newsModel