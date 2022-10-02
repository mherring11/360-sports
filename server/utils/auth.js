const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const expiration = '1h';

