const newpost = require('express').Router();
const postBlog = require('../../../../../Controller/user/postblog');
const Auth = require('../../../../../Middeware/AuthMiddleware');

newpost.post('/', Auth("blogtee;accessToken"), postBlog);
module.exports = newpost;
