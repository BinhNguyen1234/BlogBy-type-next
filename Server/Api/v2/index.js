const v2 = require('express').Router();
const Login = require('./login');
const loginHandler = require('../../Controller/login/test');
const loginController = require('../../Controller/login/loginController');
const passport = require('passport');
v2.post('/login', loginController);
// v2.use('/auth', Auth.authenticate('blogtee;accessToken'), (req, res) => {
//    res.send('OKKK');
// });
module.exports = v2;
