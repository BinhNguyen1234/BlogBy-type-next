const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../../Model/user');
function loginHandler() {
   passport.serializeUser(({ username, password }, setToSessionCb) => {
      return setToSessionCb(null, { username, password });
   });
   return function (req, res) {
      passport.use(
         new LocalStrategy((username, password, cb) => {
            console.log(`${username} try to login`);
            const querryUser = new Promise((resolve, reject) => {
               User.findOne({ username: username }, (err, sucess) => {
                  if (err) {
                     reject(err);
                  } else {
                     resolve(sucess);
                  }
               });
            });
            return querryUser
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
         })
      );
      passport.authenticate('local', (err, user, info) => {
         if (err) {
            res.status(501).send('Server Error: Login failed');
            return next(err);
         }
         if (!user) {
            return res.status(401).send('Username or password not exist');
         } else {
            req.login(user, () => {
               return res.status(201).send('Verified success');
            });
         }
      })(req, res);
   };
}
module.exports = loginHandler;
