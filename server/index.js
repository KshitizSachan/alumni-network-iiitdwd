const express = require('express');
const cors = require('cors');
const connection = require('./db');
const userRoute = require('./routes/userRoute');
const newsRoute = require('./routes/newsRoute');
const jobRoute = require('./routes/jobRoute');
const pollRoute = require('./routes/pollRoute');
const alumniRoute = require('./routes/alumniRoute');
require('dotenv').config();


const app = express();
app.use(express.json());

// ======================================================||   Cors Setup     ||=======================================

const frontendUrl=process.env.FRONTENDURI;
const allowedOrigins = [
    frontendUrl
]
app.use(cors({
    origin: function(origin, callback){
        if(!origin || allowedOrigins.includes(origin)){
            callback(null, true);
        }else{
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Enable credentials (cookies, authorization headers)
}));

//-----------------------------------------------------Routers----------------------------------------------------------------

app.use('/user',userRoute);
app.use('/news',newsRoute);
app.use('/job',jobRoute);
app.use('/poll',pollRoute);
app.use('/alumni',alumniRoute);

//---------------------------------------------------Milldewares--------------------------------------------------

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Server Side Error");
});

//---------------------------------------------Connection to Database----------------------------------------------------
connection();

//----------------------------------------------------Listening---------------------------------------------------------------

app.get('/', (req, res) =>{
    res.send("Server up and running")
})

const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log("Server up and running on ", port);
})







