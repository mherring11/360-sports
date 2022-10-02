const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const expiration = '3h';

function generateToken({ req }) {
    let token = req.body || req.query || req.headers.authorization;

    

    return req;
}

function signToken({ email, _id }) {
    const payload = { email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}

module.exports = { generateToken, signToken };