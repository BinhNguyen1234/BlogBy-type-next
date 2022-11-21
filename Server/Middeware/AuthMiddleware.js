const passportClass = require('passport').Passport;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

class Auth {
   passport = new passportClass()
   secretOrKey = null;
   constructor (){
      this.secretOrKey = null
   }
   authenticate(secretOrKey){
      console.log(secretOrKey)
      this.passport.use(
         new JwtStrategy(
            {
               secretOrKey: this.secretOrKey || secretOrKey,
               jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            },
            (JwtPayload, done) => {
               console.log(JwtPayload)
               if (JwtPayload) {
                  return done(null, JwtPayload);
               } else {
                  return done(null, false);
               }
            }
         )
      )
      return async (req, res, next) => {
         this.passport.authenticate(
            'jwt',
            { session: false },
            (err, JwtPayload, info) => {
               if (err) {
                  return res.status(501).send('Server Error: Login failed');
               } else if (!JwtPayload) {
                  return res.status(401).send('wrong token');
               } else {
                  req.user = { username: JwtPayload.username };
                  return next();
               }
            }
         )(req, res, next);
      }
   }
}
module.exports = Auth;
