const AuthClass = require('../../../../Middeware/AuthMiddleware');
const post = require('./post');
const { GetBlogList } = require('../../../../Controller/user/editblog');
const editblog = require('express').Router();
const Auth = new AuthClass();
const removePost = require("../../../../Controller/user/removeblog")
editblog.use(Auth.authenticate('blogtee;accessToken'));
editblog.get('', GetBlogList);
editblog.post('/remove',removePost);
editblog.use('/post', post);
module.exports = editblog;
