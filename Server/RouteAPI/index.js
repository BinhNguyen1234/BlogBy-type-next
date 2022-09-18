const APIrouter = require("express").Router()
const Login = require("./login/Login")
const getuser = require("./getuser")
const user = require("./user")
function appendAPIRoute (app) {
    app.use("/login",Login)
    app.use("/getuser",getuser)
    app.use("/user",user)
};
module.exports = appendAPIRoute