import jwt from "jsonwebtoken"
import { config } from "dotenv";
config()

const jwtVerify = (req, res, next) => {
 
  const token = req.headers['authorization']?.split(' ')[1]; // Expecting 'Bearer <token>'

  // If token is not provided
  if (!token) {
    return res.send('Access Denied: No Token Provided!');
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.send('Invalid Token' );
    }

  
    req.user = decoded;
    next(); 
  });
};

export default jwtVerify;