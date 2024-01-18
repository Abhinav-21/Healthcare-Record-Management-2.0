import express from 'express';
import { generateCookieToken,decodeCookieToken } from '../modules/jwt.mjs'; 
const router = express.Router();

router.get('/', function(req,res){
    const data = generateCookieToken('hello boy');
    console.log(data);
    console.log(decodeCookieToken(data))
    res.send("hello boy!!");
})

export default router;