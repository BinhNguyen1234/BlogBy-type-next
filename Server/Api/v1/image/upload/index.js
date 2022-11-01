const blog = require('./blog');
const post = require('express').Router();
post.use('/blog', blog);
module.exports = post;
