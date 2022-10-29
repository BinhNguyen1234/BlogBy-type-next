const blog = require('express').Router()


blog.get("*",(req,res)=>{
    res.send("ok")
})

module.exports = blog