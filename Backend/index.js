const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();



// Setting up the port for the server...
const port= process.env.PORT || 5000;

// Connecting to the MongoDB database
mongoose.connect(process.env.MongoURI)



// Configuring CORS options.
const corsOptions = {
    origin: 'https://rablo-z1is.onrender.com/', // Add the correct origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };


// Applying CORS middleware to the app...
app.use(cors(corsOptions));

// Parsing JSON in request body
app.use(express.json());

// Handling a simple GET request at the root endpoint
app.get('/',(req,res)=>{

    res.send('hello world')
})


app.use('/api',require("./routes/products"))
app.use('/api',require("./routes/categories"))


// Starting the server on the specified port
app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})