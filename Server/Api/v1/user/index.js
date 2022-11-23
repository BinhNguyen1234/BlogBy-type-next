const user = require('express').Router();
const logout = require('./logout');
const writeblog = require('./writeblog');
const editblog = require('./editblog');

user.use('/logout', logout);
user.use('/writeblog', writeblog);
user.use('/editblog', editblog);
module.exports = user;
