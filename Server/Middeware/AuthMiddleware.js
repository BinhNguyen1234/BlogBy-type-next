const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
function Auth() {
   passport.use(
      new JwtStrategy(
         {
            secretOrKey: '170116Abcrefresh',
            jwtFromRequest: ExtractJwt.fromHeader('test'),
         },
         (JwtPayload, done) => {
            console.log(JwtPayload, 'payload');
            let err = null;
            if (err) {
               return done(err, false);
            }
            if (JwtPayload) {
               return done(null, JwtPayload);
            } else {
               return done(null, false);
               // or you could create a new account
            }
         }
      )
   );
   return async (req, res, next) => {
      passport.authenticate(
         'jwt',
         { session: false },
         (err, JwtPayload, info) => {
            console.log(JwtPayload);
            if (err) {
               console.log(err);
               return res.status(501).send('Server Error: Login failed');
            } else if (!JwtPayload) {
               return res.status(401).send('Username or password not exist');
            } else {
               return next();
            }
         }
      )(req, res, next);
   };
}
module.exports = Auth;
