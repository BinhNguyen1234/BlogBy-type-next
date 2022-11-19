const v2 = require('express').Router();
const Login = require('./login');
const loginHandler = require('../../Controller/login/test');
const loginController = require('../../Controller/login/loginController');
const Auth = require('../../Middeware/AuthMiddleware');
const passport = require('passport');
v2.post('/login', loginController);
v2.use('/auth', Auth(), (req, res) => {
   res.send('OKKK');
});
module.exports = v2;
