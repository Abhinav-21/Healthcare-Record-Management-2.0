const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
const PORT = process.env.PORT;


const loginSignupRoute = require('./routes/loginSignup');

app.use('/hello',loginSignupRoute);
app.listen(PORT,function(){
    console.log(`SERVER RUNNING ON ${PORT}`);
})