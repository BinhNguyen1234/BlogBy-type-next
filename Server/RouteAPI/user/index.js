const user = require("express").Router()
const logout = require("./logout")
user.use("/logout",logout)
module.exports = user