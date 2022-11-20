const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
function Auth(secretOrKey) {
    passport.use(
        new JwtStrategy(
           {
              secretOrKey,
              jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
           },
           (JwtPayload, done) => {
              if (JwtPayload) {
                 return done(null, JwtPayload);
              } else {
                 return done(null, false);
              }
           }
        )
     )
   return async (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, JwtPayload, info) => {
        if (err) {
           return res.status(501).send('Server Error: Login failed');
        } else if (!JwtPayload) {
           return res.status(401).send('wrong token');
        } else {
            req.user = {username: JwtPayload.username}
           return next();
        }
     })(req, res,next)
   };
}
module.exports = Auth