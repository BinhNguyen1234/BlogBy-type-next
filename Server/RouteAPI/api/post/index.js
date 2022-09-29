const image = require("./image")
const post = require("express").Router() 
post.use("/image",image)
module.exports = post
