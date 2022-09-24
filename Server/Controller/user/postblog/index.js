const user = require("../../../Model/user")
const post = require("../../../Model/post")
const isTitleDuplicate = require("../../../Middeware/tool/isTitleDuplicate")
async function postBlog(req,res){
    


    try {
        let writer = new Promise((resolve, reject)=>{ user.findOne({
            "username": req.user.username})
        .then((document)=>{
            return resolve(document)
        })
        .catch((e)=>{
            res.status(401).send("Error when verify user, please logon again")
            console.log("Have error when verify user")
            throw reject(new Error("Have error when verify user"))
        })
        })
       let isDuplicate = new Promise((resolve, reject)=>{
            isTitleDuplicate(req.body.title).then((isDup)=>{
                return resolve(isDup)
            }).catch((e)=>{
                reject(e)
            })
       })

   
        await Promise.all([writer, isDuplicate])
        .then(([writer,isDuplicate])=>{
            if (isDuplicate){
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
                
            }
        })
        .catch((e)=>{
            throw e
        })
}
    catch(e){
        console.log(e)
       
    }
}
module.exports = postBlog