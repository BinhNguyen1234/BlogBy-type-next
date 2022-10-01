const newpost = require("express").Router()
const postBlog = require("../../../../Controller/user/postblog")
const Auth = require("../../../../Middeware/Auth")

newpost.post("/",Auth(),postBlog)
module.exports = newpost