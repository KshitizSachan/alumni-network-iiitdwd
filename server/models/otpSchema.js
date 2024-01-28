const mongoose = require('mongoose');

//-------------------------------------------------Defining OTP Schema------------------------------------------------
const otpSchema = new mongoose.Schema({
    otpID: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: "5m", 
    }
});

const otpModel = mongoose.model('otp', otpSchema);
module.exports = otpModel