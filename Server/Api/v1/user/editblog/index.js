const AuthClass = require('../../../../Middeware/AuthMiddleware');
const post = require('./post');
const { GetBlogList } = require('../../../../Controller/user/editblog');
const editblog = require('express').Router();
const Auth = new AuthClass();

editblog.get('', Auth.authenticate('blogtee;accessToken'), GetBlogList);
editblog.get('/search', Auth.authenticate('blogtee;accessToken'));
editblog.use('/post', Auth.authenticate('blogtee;accessToken'), post);
module.exports = editblog;
