const Auth = require("../../../../Middeware/Auth")
const EndPoint =  require("../../../../Controller/user/editblog")
const editblog = require('express').Router()
    editblog.get("",Auth(),EndPoint)


module.exports = editblog