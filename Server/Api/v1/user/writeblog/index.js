const writeblog = require('express').Router();
const newpost = require('./newpost');
writeblog.use('/newpost', newpost);

module.exports = writeblog;
