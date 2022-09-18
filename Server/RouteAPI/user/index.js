const user = require("express").Router()
const logout = require("./logout")
const writeblog = require("./writeblog")
user.use("/logout",logout)
user.use("/writeblog",writeblog)
module.exports = user