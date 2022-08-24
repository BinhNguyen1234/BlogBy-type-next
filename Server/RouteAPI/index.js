const APIrouter = require("express").Router()
const Login = require("./login/Login")


function appendAPIRoute (app) {
    app.use("/login",Login)
};
module.exports = appendAPIRoute