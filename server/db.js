const mongoose = require('mongoose');
require('dotenv').config();
const connection = async () =>{
    try{
        const mongoURI = process.env.MONGODB_URI;
        await mongoose.connect(mongoURI)
        console.log('Connected to MongoDB');
    }catch(err){
        console.log("Error in connection to mongoDB: ",err);
    }
}
module.exports = connection;

