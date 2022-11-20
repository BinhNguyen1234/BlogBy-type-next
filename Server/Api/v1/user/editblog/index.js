const Auth = require('../../../../Middeware/AuthMiddleware');
const post = require('./post');
const { GetBlogList } = require('../../../../Controller/user/editblog');
const editblog = require('express').Router();

editblog.get('', Auth("blogtee;accessToken"), GetBlogList);
editblog.get('/search', Auth("blogtee;accessToken"));
editblog.use('/post', Auth("blogtee;accessToken") ,post);
module.exports = editblog;
