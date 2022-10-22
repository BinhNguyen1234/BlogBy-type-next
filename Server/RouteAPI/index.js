const APIrouter = require("express").Router()
const Login = require("./login/Login")
const getuser = require("./getuser")
const user = require("./user")
const api = require("./api")
const fakeapi = require("./fakeapi")
const blog = require("./blog")
function appendAPIRoute (app) {
    app.use("/login",Login)
    app.use("/getuser",getuser)
    app.use("/user",user)
    app.use("/api",api)
    app.use("/fakeapi",fakeapi)
    // app.use("/blog",blog)
};
module.exports = appendAPIRoute