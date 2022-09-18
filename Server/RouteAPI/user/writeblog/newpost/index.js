const newpost = require("express").Router()


newpost.post("/",(req,res)=>{
    res.send("reach to new post")
    console.log("reach to new post")
})
module.exports = newpost