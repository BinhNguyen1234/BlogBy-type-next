const Auth = require('express').Router();
const loginController = require('../../../../Controller/login/loginController');
Auth.post('/', loginController);
module.exports = Auth;
