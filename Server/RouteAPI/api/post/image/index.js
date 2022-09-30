const multer = require("multer")
const storageEngine = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'server/image/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix +".png")
    }
  })
const upload = multer({storage: storageEngine})

const fs = require('fs')
const image = require("express").Router()
image.post("/",upload.single("upload-name"),(req,res)=>{
    console.log(req.file)
    res.status(299).send(req.file.filename)
})

module.exports = image
// const test = require("../../../../../Server/image")