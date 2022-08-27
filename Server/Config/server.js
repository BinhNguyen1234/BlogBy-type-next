const express = require('express');
const next = require('next');
const bodyParser = require("body-parser")
const dev = process.env.NODE_ENV !== 'production';
const appendAPIRoute = require("../RouteAPI")
const Database = require("./Database")
const session = require("express-session");
const passport = require("passport")
const Auth = require("../Middeware/Auth")
 class  App  {
    
    
    async run (port){
       let appNext = next({ dev })
       let  handle = appNext.getRequestHandler()
        appNext.prepare()
        .then(()=>{

            const app = express()
            app.use(bodyParser.json())
            app.use(bodyParser.urlencoded({ extended: true }));
            app.use("/",
                session(
                    {secret : "secret",
                    saveUninitialized: true,
                    resave: true}
                ),
                passport.session()
            )
            
            app.listen(port,()=>{
                console.log("server running sucess at port "+ port)
                Database.connect('binhnguyen','170116Abc','Blog')
            })



            appendAPIRoute(app)
            app.get("*",(req,res)=>{
                return handle(req,res)
            })
        })
        .catch((err) => {
            console.error(err.stack)
            process.exit(1)
          })
    }
  }
 module.exports = new App()