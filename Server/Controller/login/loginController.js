const User = require('../../Model/user');
const jwt = require('jsonwebtoken');
async function loginController(req, res) {
   try {
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
      console.log('reach route');
      querryUser
         .then((result) => {
            console.log(`Find ${username} success `);
            if (password == result.password) {
               console.log(`password verify sucess`);
               const accToken = jwt.sign(
                  { username: username },
                  'blogtee;accessToken'
               );
               const rfToken = jwt.sign(
                  { username: username },
                  'blogtee;refreshToken'
               );
               res.status(201)
                  .cookie('acc', accToken, { maxAge: 1000 * 60 * 5 })
                  .cookie('rf', rfToken, { maxAge: 1000 * 60 * 60 * 4 })
                  .send('OK'); // expire after 4h;
            } else {
               console.log(`password verify failed`);
               res.status(401).send('Wrong username and password');
            }
         })
         .catch((err) => {
            console.log(err);
            console.log('error when querry user, user not exist');
            res.status(401).send('username not exist');
         });
   } catch (e) {
      res.status(501).send('server error');
   }
}
module.exports = loginController;
