const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../../Model/user');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
function loginHandler() {
   return async function (req, res) {
      const { username, password } = req.body;
      const querryUser = new Promise((resolve, reject) => {
         User.findOne({ username: username }, (err, sucess) => {
            if (err) {
               reject(err);
            } else {
               resolve(sucess);
            }
         });
      });
      querryUser
         .then((result) => {
            console.log(`Find ${username} success `);
            if (password == result.password) {
               console.log(`password verify sucess`);
               return cb(null, {
                  username,
                  password,
                  message: 'Verify',
               });
            } else {
               console.log(`password verify failed`);
               return cb(null, false);
            }
         })
         .catch((err) => {
            if (err) {
               console.log(err);
               console.log('error when querry user, user not exist');
               return cb(null, false);
            }
         });
      passport.use(
         new JwtStrategy(
            {
               secretOrKey: '170116Abc',
               jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            },
            (JwtPayload, done) => {
               console.log(JwtPayload);
               if (err) {
                  return done(err, false);
               }
               if (user) {
                  return done(null, user);
               } else {
                  return done(null, false);
                  // or you could create a new account
               }
            }
         )
      );
      passport.authenticate('jwt', { session: false }, (err, user, info) => {
         if (err) {
            console.log(err);
            return res.status(501).send('Server Error: Login failed');
         } else if (!user) {
            return res.status(401).send('Username or password not exist');
         } else {
            return res.status(201).send('Verified success');
         }
      })(req, res);
   };
}
module.exports = loginHandler;
