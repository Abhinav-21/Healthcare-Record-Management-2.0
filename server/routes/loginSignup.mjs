import express from 'express';
import { generateCookieToken,decodeCookieToken } from '../modules/jwt.mjs';
const router = express.Router();

router.post('/', function(req,res){
    const {Email, Password} = req.body
    console.log(Email + " " + Password);
})

export default router;