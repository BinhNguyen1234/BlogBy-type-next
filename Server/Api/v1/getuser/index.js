const getuser = require('express').Router();
const Auth = require('../../../Middeware/AuthMiddleware');
const provideAccessJWT = require("../../../Controller/login/provideAccessJWT")
getuser.use('', Auth('blogtee;refreshToken'), provideAccessJWT);

module.exports = getuser;
