const getuser = require('express').Router();
const Auth = require('../../../Middeware/Auth');

getuser.use('', Auth(), (req, res) => {
  res.status(200).send('OK');
});

module.exports = getuser;
