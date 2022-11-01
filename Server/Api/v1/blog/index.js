const blog = require('express').Router();
const getPost = require('../../../Controller/blog/index');
blog.get('*', getPost);

module.exports = blog;
