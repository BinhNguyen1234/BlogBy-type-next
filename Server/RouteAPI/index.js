const APIrouter = require("express").Router()
const Login = require("./login/Login")
const getuser = require("./getuser")

function appendAPIRoute (app) {
    app.use("/login",Login)
    app.use("/getuser",getuser)
};
module.exports = appendAPIRoute