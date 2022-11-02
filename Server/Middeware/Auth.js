const passport = require('passport');
const user = require('../Model/user');

function Auth() {
   passport.deserializeUser((userInSession, done) => {
      user
         .findOne({ username: userInSession.username })
         .then((querrieduser) => {
            if (querrieduser.password == userInSession.password) {
               done(null, userInSession);
            }
         })
         .catch((err) => {
            done(err, false);
         });
      //  if(userInSession.username === "admin" && userInSession.password==="4fd6c0dfcac719f96423f3de90d0ab72de4534f62c51cccc94cdcb787cec07da"){
      //     done(null, user)
      //  }
      //  else{
      //      done(true, false)
      //  }
   });
   return function (req, res, next) {
      console.log(req.user);
      try {
         if (!req.user) {
            res.status(401).send('please login again');
         } else {
            next();
         }
      } catch (e) {
         res.status(501).send('Server error when auth');
         console.log(e);
      }
   };
}

module.exports = Auth;
