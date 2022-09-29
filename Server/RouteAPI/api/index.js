const api = require("express").Router()
const post = require("./post")
api.use("/post",post)
module.exports = api