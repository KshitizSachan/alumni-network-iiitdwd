const nodemailer = require("nodemailer");
const otpGenerator = require('otp-generator');

const userModel = require('../../models/userSchema');
const otpModel = require('../../models/otpSchema');


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});


const signup = async (req, res) => {
  const { email } = req.body;
  const user = await userModel.findOne({email:email});
  if(user)
  {
    return res.status(409).json({msg:"User Already Exists."});// 409 Conflict
  }
  const otpStatus = generateAndSendOtp(email);
  if(!otpStatus){
    return res.status(500).json({msg:"Error Generating And Sending OTP."});// 500 Internal Server Error
  }
  return res.status(200).json({msg:"OTP Sent Successfully."});// 200 OK
}


const generateAndSendOtp = async (email) =>{
  try{
    const otp = otpGenerator.generate(6, 
      { digits:true, lowerCaseAlphabets:false, upperCaseAlphabets:false, specialChars: false
    });
    //const expiresAt = 20;
    await otpModel.create({
      email,otp,
    })
    var mailOptions = {
      from: process.env.SMTP_MAIL,
      to: email,
      subject: "Your OTP for AlmaMatter Verification ✔️",
      text: `Dear User,
  
      Thank you for choosing AlmaMatter! Here is your OTP for verification:
  
      ${otp}
  
      This OTP will expire in 5 minutes. Please do not share it with anyone for security reasons.
  
      Regards,
      The AlmaMatter Team`
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return 0;
      } else {
        console.log("E-Mail sent successfully!");
        return 1;
      }
    });
  }
  catch(err){
    console.log("Error:",err);
    return 0;
  }
} 


module.exports = { signup };
