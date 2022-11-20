const Auth = require('../../../../../Middeware/Auth');
const post = require('express').Router();
const { EditPost } = require('../../../../../Controller/user/editblog/index');
post.post('',EditPost);

module.exports = post;
