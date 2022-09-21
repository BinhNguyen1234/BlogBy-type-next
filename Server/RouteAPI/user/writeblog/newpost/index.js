const newpost = require("express").Router()
const postBlog = require("../../../../Controller/user/postblog")

newpost.post("/",postBlog)
module.exports = newpost