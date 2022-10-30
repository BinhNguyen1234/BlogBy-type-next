const user = require("../../../Model/user")
const post = require("../../../Model/post")
async function editblog(req,res){
  
    let ListBlog = await user.findOne({"username":req.user.username}).populate({
        path: "_post",
        select: {"title":1,"url":1,"_id":0,"date":1},
        match :{}
    }).limit(20)
    res.send(ListBlog["_post"])
}

module.exports = editblog