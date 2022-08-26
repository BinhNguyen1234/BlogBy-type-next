const Auth = require("express").Router()
const loginHandler = require("../../../Middeware/loginHandler")

Auth.post("/",loginHandler(),(req,res)=>{
    res.send("OK")
    console.log(req.session)
    
})
// Auth.post("/",(req,res)=>{
//     res.send("OK")
//     console.log(req.session)
//     console.log(req._passport)
// })
module.exports = Auth