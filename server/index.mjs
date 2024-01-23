import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import loginSignupRoute from './routes/loginSignup.mjs';
dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());
app.use('/test',loginSignupRoute);


app.listen(PORT,function(){
    console.log(`SERVER RUNNING ON ${PORT}`);
})