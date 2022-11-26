const v1 = require('./v1');
// const v2 = require('./v2');
const api = require('express').Router();
api.use('/v1', v1);
// api.use('/v2', v2);
module.exports = api;
