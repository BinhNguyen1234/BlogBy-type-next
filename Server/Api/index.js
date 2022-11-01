// // const APIrouter = require("express").Router()
// // const Login = require("./login/Login")
// // const getuser = require("./getuser")
// // const user = require("./user")
// // const api = require("./api")
// // const fakeapi = require("./v1/fakeapi")
// function appendAPIRoute (app) {
//     app.use("/api","v1")
//     app.use("/api","v2")
//     // app.use("/login",Login)
//     // app.use("/getuser",getuser)
//     // app.use("/user",user)
//     // app.use("/api",api)
//     // app.use("/fakeapi",fakeapi)
//     // app.use("/blog",blog)
// };
// module.exports = appendAPIRoute
const v1 = require('./v1');
const api = require('express').Router();
api.use('/v1', v1);

module.exports = api;
