const APIrouter = require("express").Router()
const Login = require("./login/Login")
const getuser = require("./getuser")
const user = require("./user")
const api = require("./api")
function appendAPIRoute (app) {
    app.use("/login",Login)
    app.use("/getuser",getuser)
    app.use("/user",user)
    app.use("/api",api)
};
module.exports = appendAPIRoute