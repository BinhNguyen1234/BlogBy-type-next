const api = require('express').Router();
const upload = require('./upload');
api.use('/upload', upload);
module.exports = api;
