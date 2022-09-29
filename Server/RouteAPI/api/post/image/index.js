
const fs = require('fs')
const image = require("express").Router()
image.post("/",(req,res)=>{
    console.log(req.body)
    fs.appendFile("../../../../../Server/image/",req.body,(e)=>{
        console.log(e)
    })
    res.status(203).send("react api")
})

module.exports = image
// const test = require("../../../../../Server/image")