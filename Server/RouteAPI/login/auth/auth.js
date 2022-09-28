const Auth = require("express").Router()
const loginHandler = require("../../../Controller/login/loginHandler")

Auth.post("/",loginHandler())
module.exports = Auth