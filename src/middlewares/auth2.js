// middleware/auth.js
const passport = require("passport")
// const jwt = require('jsonwebtoken');
const jwttoken = require('../config/jwt.json')
// const jwttoken = config.get("jwt")
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = jwttoken.jwtSecret

// opts.secretOrKey = 'sd564fkhlksuhtblks6duvkzug90hsoui3fh345sdu';
// const secretKey = 'sd564fkhlksuhtblks6duvkzug90hsoui3fh345sdu'; // Replace with your actual secret key
 
// const jwtOptions = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: secretKey,
// };
 
const jwtAuthMiddleware = (req, res, next) => {
  passport.authenticate(
    new JwtStrategy(opts, (jwtPayload, done) => {
      // Add custom logic to validate the token and user here
      // For example, check if the user exists in your database
 
      // If token is valid and user exists, pass the user to the next middleware
      // Otherwise, return unauthorized
      if (jwtPayload) {
        return done(null, jwtPayload);
      } else {
        return done(null, false, { message: 'Unauthorized' });
      }
    }), { session: false }
  )(req, res, next);
};
 
module.exports = jwtAuthMiddleware;