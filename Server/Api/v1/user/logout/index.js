const logout = require('express').Router();
logout.post('/', (req, res) => {
   if (req.user) {
      req.logout((err) => {
         if (err) {
            res.status(402).send('cannot logout');
         } else {
            res.status(202).send('logout success');
         }
      });
   } else {
      res.status(402).send('cannot logout');
   }
});

module.exports = logout;
