/*
    auth.js
    Strider
    Documented on 10/06/2022
    
    Description:
      Handles the authentication of the user.
    
    Documentation:
      No documentation provided.
*/

const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');
const expiration = '3h';

function authenticateToken({ req }) {
    let token = req.body || req.query || req.headers.authorization;

    if (req.headers.authorization) {
        token = token.split(" ").pop().trim();
      }
  
      if (!token) {
        return req;
      }
  
      try {
        const { data } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, { maxAge: expiration });
        req.user = data;
      } catch {
        console.log('Invalid token');
      }

    return req;
}

function generateToken({ email, _id }) {
    const payload = { email, _id };

    return jwt.sign({ data: payload }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: expiration });
}

module.exports = { generateToken, authenticateToken };