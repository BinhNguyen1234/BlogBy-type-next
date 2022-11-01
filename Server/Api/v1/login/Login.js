const Login = require('express').Router();

const Auth = require('./auth/auth');

Login.use('/auth', Auth);

module.exports = Login;
