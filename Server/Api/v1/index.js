const v1 = require('express').Router();
const Login = require('./login/Login');
const getuser = require('./getuser');
const user = require('./user');
const image = require('./image');
const blog = require('./blog');
v1.use('/login', Login);
v1.use('/getuser', getuser);
v1.use('/user', user);
v1.use('/image', image);
v1.use('/blog', blog);

module.exports = v1;
