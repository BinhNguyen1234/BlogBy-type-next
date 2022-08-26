const passport = require("passport")
const LocalStrategy = require("passport-local")

function loginHandler(){
    passport.serializeUser(({username, password}, setToSessionCb)=>{
        return setToSessionCb(null,{username, password});
    })
   return function(req,res,next){ 
        passport.use(new LocalStrategy((username, password, cb)=>{
            if (username == "admin" && password == "4fd6c0dfcac719f96423f3de90d0ab72de4534f62c51cccc94cdcb787cec07da"){
                return cb(null,{username,password, message : "Verify"});
            }else{
                return cb(null,false)
        }
    }))
        passport.authenticate('local')(req,res,()=>{
            return res.status(201).send("Verified and login")
        })
}
}
module.exports = loginHandler 