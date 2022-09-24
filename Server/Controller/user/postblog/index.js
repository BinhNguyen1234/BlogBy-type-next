const user = require("../../../Model/user")
const post = require("../../../Model/post")
const isTitleDuplicate = require("../../../Middeware/tool/isTitleDuplicate")
async function postBlog(req,res){
    


    try {
        let writer = user.findOne({
        "username": req.user.username})
        .then((document)=>{
            return document
        })
        .catch((e)=>{
            res.status(401).send("Error when verify user, please logon again")
            console.log("Have error when verify user")
            throw new Error("Have error when verify user")
       })


       if ( await isTitleDuplicate(req.body.title)){
            res.status(402).send("Title is exist or duplicate")
       }else{
             newPost = new post({
                _writter: writer._id,
                title : req.body.title,
                content: req.body.content,
                date: new Date()
             })
             newPost.save().then((result)=>{
                res.status(202).send("New Post was save in Database")
             })
             .catch((e=>{
                console.log(e);
                res.status(402).send("Error when save new post")
             }))
       }
       
    }
    catch(e){
        console.log(e)
        res.status(401).send("Error when verify user, please login again")
    }
}
module.exports = postBlog