const getuser = require('express').Router()
const Auth = require("../../Middeware/Auth")

getuser.use("",Auth())

module.exports = getuser


