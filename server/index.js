const express = require('express');
const cors = require('cors');
const connection = require('./db');
require('dotenv').config();

const app = express();
app.use(express.json());
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

const port = process.env.PORT || 5000;

//-----------------------------Connection to Database--------------------------------
connection();

app.get('/', (req, res) =>{
    res.send("Server up and running")
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Server Side Error");
});

app.listen(port, () =>{
    console.log("Server up and running on ", port);
})







