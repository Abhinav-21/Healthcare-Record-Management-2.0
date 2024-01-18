import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

function verifyJwt(token, secretKey) {
    try {
      const decoded = jwt.verify(token, secretKey);
      return decoded;
    } catch (error) {
      console.error('JWT Verification Error:', error.message);
      throw error;
    }
  }

function generateCookieToken(user){
    const token = jwt.sign(user, process.env.JWT_SECRET_KEY);
    return token;
}
function decodeCookieToken(token){
    try{
        if(!token) {
            console.error('Token is undefined or null');
        }
        const user = verifyJwt(token, process.env.JWT_SECRET_KEY);
        return user;
    }catch(err){
        console.log(err);
    }
}


export{
    generateCookieToken,
    decodeCookieToken
}