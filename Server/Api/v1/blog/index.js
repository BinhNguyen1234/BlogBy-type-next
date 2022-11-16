const blog = require('express').Router();
const getPost = require('../../../Controller/blog/index');
const getList = require('../../../Controller/blog/getList');
blog.get('', getPost);
blog.get('/getblog', getList);
module.exports = blog;
