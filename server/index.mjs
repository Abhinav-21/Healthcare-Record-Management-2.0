import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const PORT = process.env.PORT;

import loginSignupRoute from './routes/loginSignup.mjs';

app.use('/hello',loginSignupRoute);
app.listen(PORT,function(){
    console.log(`SERVER RUNNING ON ${PORT}`);
})