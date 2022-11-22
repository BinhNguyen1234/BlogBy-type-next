const getuser = require('express').Router();
const AuthClass = require('../../../Middeware/AuthMiddleware');
const Auth = new AuthClass();

const provideAccessJWT = require('../../../Controller/login/provideAccessJWT');
getuser.post('/', Auth.authenticate('blogtee;refreshToken'), provideAccessJWT);

module.exports = getuser;
