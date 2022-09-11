const Auth = require("express").Router()
const loginHandler = require("../../../Middeware/loginHandler")

Auth.post("/",loginHandler(),(req,res)=>{
    res.status(201).send("Login Success")
    
})
module.exports = Auth