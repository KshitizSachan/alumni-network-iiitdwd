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
    await otpModel.create({
      email,otp,
    })
    var mailOptions = {
      from: '"AlmaMatter" <' + process.env.SMTP_MAIL + '>',
      to: email,
      subject: "Your OTP for AlmaMatter Verification",
      // html: `Dear User,<br><br>

      // Thank you for choosing AlmaMatter! Here is your OTP for verification:<br><br>

      // <strong>${otp}</strong><br><br>

      // This OTP will expire in 5 minutes. Please do not share it with anyone for security reasons.<br><br>

      // Regards,<br>
      // The AlmaMatter Team`
      html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f9f9f9;">
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://i.imgur.com/7FjkA5D.png" alt="AlmaMatter" style="width: 150px;" />
      </div>

      <h2 style="color: #333;">Dear User,</h2>

      <p style="color: #555; line-height: 1.6;">
        Thank you for choosing <strong>AlmaMatter</strong>! We're thrilled to have you on board. Here is your OTP for verification:
      </p>

      <div style="text-align: center; margin: 20px 0;">
        <span style="display: inline-block; padding: 10px 20px; background-color: #f0f4ff; color: #1a73e8; font-size: 24px; font-weight: bold; border-radius: 5px;">
          ${otp}
        </span>
      </div>

      <p style="color: #555; line-height: 1.6;">
        This OTP will expire in 5 minutes. For your security, please do not share this code with anyone.
      </p>

      <p style="color: #555; line-height: 1.6;">
        If you didn't request this verification, please ignore this email or contact our support team.
      </p>

      <br>

      <p style="color: #333; line-height: 1.6;">
        Regards,<br>
        <strong>The AlmaMatter Team</strong>
      </p>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />

      <footer style="color: #777; font-size: 12px; text-align: center;">
        &copy; 2024 AlmaMatter. All rights reserved.<br>
        IIIT Dharwad, Karnataka
      </footer>
    </div>
  `
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
