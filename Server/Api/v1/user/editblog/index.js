const Auth = require('../../../../Middeware/Auth');
const post = require('./post');
const { GetBlogList } = require('../../../../Controller/user/editblog');
const editblog = require('express').Router();
editblog.get('', Auth(), GetBlogList);
editblog.use('/post', post);
module.exports = editblog;
