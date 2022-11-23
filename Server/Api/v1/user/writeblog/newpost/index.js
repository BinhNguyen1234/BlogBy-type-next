const newpost = require('express').Router();
const postBlog = require('../../../../../Controller/user/postblog');
const AuthClass = require('../../../../../Middeware/AuthMiddleware');
const Auth = new AuthClass();

newpost.post('/', Auth.authenticate('blogtee;accessToken'), postBlog);
module.exports = newpost;
