const passport = require('passport');


function checkReq(req,res,next){
    
   
   next()
   
}
function  Auth(){

   passport.deserializeUser((user,done)=>{
    if(user.username === "admin" && user.password==="4fd6c0dfcac719f96423f3de90d0ab72de4534f62c51cccc94cdcb787cec07da"){
       done(null, user)
    }
    else{
        done(true, false)
    }
   })
   return function(req, res, next){ 
        passport.initialize()(req, res , ()=>checkReq(req,res,next))
    } 
}


module.exports = Auth;