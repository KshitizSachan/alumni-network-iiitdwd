const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userModel = require('../../models/userSchema');
const otpModel = require('../../models/otpSchema');

const verify = async (req,res) =>
{
  var otp;
  const { email, otpAttempt, rank } = req.body;

    otp = await otpModel.findOne({email:email});

  if(otp===null){
    return res.status(404).json({msg:"OTP Expired or Wrong E-Mail."});// 404 Not Found
  }
  if(otp.otp != otpAttempt)
  {
    await otpModel.deleteOne({email:email});
    return res.status(401).json({msg:"Incorrect OTP."});// 401 Unauthorized
  }
  else{
    await otpModel.deleteOne({email:email});
    switch (rank) {
        case 0: // Admin
        {
          const { name, email, password } = req.body;
          bcrypt.hash(password, 8, async (err, hash) => {
            if (err) {
              return res.status(500).json({ msg: "Error Hashing Password:", err }); // 500 Internal Server Error
            }
            try {
              await userModel.create({
                name:name,
                email:email,
                password: hash,
                rank: rank,
              });
              try {
                const token = jwt.sign({ email:email, rank:rank }, process.env.jwtPassword, {
                  expiresIn: "4d"
                  });
                  return res.status(201).json({ msg: "Admin Created Successfully", token }); // 201 Created with token
                } catch (err) {
                  return res.status(500).json({ msg: "Error Generating JWT:", err }); // 500 Internal Server Error
                }
              } catch (err) {
                if (err.name === "ValidationError") {
                  return res.status(422).json({ msg: err.message }); // 422 Unprocessable Entity
                } else if (err.code === 11000 && err.keyPattern.email) {
                  return res.status(409).json({ msg: "Email already exists." }); // 409 Conflict
                } else {
                  return res.status(500).json({ msg: "Internal Server Error:", err }); // 500 Internal Server Error
                }
              }
            });
            break;
          }
          case 1: //Verified alumni
          {
            const { isOld } = req.body;
            if (isOld === 1) { //isOld = 0 (Alumni did not have a previos Verified Student Account)
              const { oldEmail, newEmail, password } = req.body;
            bcrypt.compare(password, account.password, async (err, result) => {
              if(err) {
                return res.status(401).json({ msg: "Incorrect Password:",err }); //401 Unauthorized
              }
              else {
                const account = await userModel.findOne({email : oldEmail});
                if (!account) {
                  return res.status(404).json({ msg: "User not found" }); //404 Not Found
                }
                if (account.rank !== 2) {
                  return res.status(403).json({ msg: "Access denied. User is not a verified college student." });//403 Forbidden
                }
                account.rank = 1;
                account.email = newEmail;
                account.save().then((err) => {
                  if(!err){
                    return res.status(201).json({ msg: "User Upgraded Successfully" });//201 Created
                  }
                  else{
                    return res.status(422).json({ msg: "Unable to create user object:", err }); //422 Unprocessable Entity
                  }
                });
              } 
            });
          } 
          else //isOld = 0 (Alumni did not have a previos Verified Student Account)
          {
            const { name, email, password } = req.body;
            const account = await userModel.findOne({email : email});
            if (account) {
              return res.status(422).json({ msg: "Email Already In Use." }); //404 Not Found
            }
            bcrypt.hash(password, 8, async (err, hash) => {
              if (err) {
                return res.status(500).json({ msg: "Error Hashing Password:", err }); //500 Internal Server Error
              } else {
                try{
                  var accDetails = { name: "", email: "", password: "" };
                  accDetails.name = name;
                  accDetails.email = email;
                  accDetails.password = hash;
                  accDetailsString = JSON.stringify(accDetails);
                  const admin = await userModel.findOne({ email: "admin@admin.com" });
                  try{
                    admin.notifications.push({
                      type: "Verification",
                      objID: accDetailsString
                    });
                    admin.save();
                    return res.status(201).json({ msg: "Account Info Sent to Admin. Wait for Verification." });//201 Created
                  }
                  catch(err){
                    return res.status(422).json({ msg: "Unable to make notification object to send to admin:", err });//422 Unprocessable Entity
                  }
                }
                catch(err){
                  return res.status(500).json({ msg: "Internal Server Error:", err });//500 Internal Server Error
                }
              }
            });
          }
          break;
        }
        case 2: //verified student
        {
          const { name, email, password, otpAttempt } = req.body;
          if(otpAttempt != req.session.otp)
          {
            return res.status().json({msg:"Incorrect OTP."})
          }
          bcrypt.hash(password, 8, async (err, hash) => {
            if (err) {
              return res.status(500).json({ msg: "Error Hashing Password:", err });//500 Internal Server Error
            } else {
              try {
                const collegeVerificationSubstring = email.substring(9);
                if (collegeVerificationSubstring !== "iiitdwd.ac.in") {
                  return res.status(400).json({ msg: "Invalid College Email ID." });//400 Bad Request
                }
                
                try {
                  const batch = Number(email.substring(0, 2)) + 4;  
                  const branchSubstring = email.substring(3, 5);
                  const branch = branchSubstring === "cs" ? "cse" : branchSubstring === "ec" ? "ece" : "dsai";
                  
                  await userModel.create({
                    name: name,
                    password: hash,
                    email: email,
                    rank: rank, 
                    batch: batch,
                    branch: branch,
                  });
                  try {
                    const token = jwt.sign({ email: email, rank:rank }, process.env.jwtPassword, {
                      expiresIn: "4d"
                    });
                    return res.status(201).json({ msg: "User Created Successfully", token }); // 201 Created with token
                  } catch (err) {
                    return res.status(500).json({ msg: "Error Generating JWT:", err }); // 500 Internal Server Error
                  }
                } catch (err) {
                  return res.status(400).json({ msg: "Invalid College Email ID." });//400 Bad Request
                }
              } catch (err) {
                return res.status(422).json({ msg: "Unable to create user object:", err });//422 Unprocessable Entity
              }
            }
          });
          
          break;
        }
        case 3: //Unauthorized account
        {
          const { name, email, password } = req.body;
          bcrypt.hash(password, 8, async (err, hash) => {
            if (err) {
              return res.status(500).json({ msg: "Error Hashing Password:", err }); // 500 Internal Server Error
            }
            try {
              await userModel.create({
                name: name,
                password: hash,
                email: email,
                rank: rank,
              });
            } catch (err) {
              if (err.name === 'ValidationError') { // Check for validation errors
                return res.status(422).json({ msg: err.message }); // 422 Unprocessable Entity
              } else {
                return res.status(500).json({ msg: "Internal Server Error:", err }); // 500 Internal Server Error
              }
            }
            try {
              const token = jwt.sign({ email: email, rank:rank }, process.env.jwtPassword, {
                expiresIn: "4d"
              });
              return res.status(201).json({ msg: "User Created Successfully",token: token }); // 201 Created with token
            } catch (err) {
              return res.status(500).json({ msg: "Error Generating JWT:", err }); // 500 Internal Server Error
            }
          });
          break;
        }
      }
    }
}
module.exports = { verify };