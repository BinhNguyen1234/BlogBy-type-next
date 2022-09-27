const user = require("../../../Model/user")
const post = require("../../../Model/post")
const isTitleDuplicate = require("../../../Middeware/tool/isTitleDuplicate")
async function postBlog(req,res){
    // const test =  await user.findOne({"username":req.user.username}).populate({path: "_post", match : {"title":"213213214"}})
    // console.log(test) // Querry post base on user
    let writer = new Promise((resolve, reject)=>{ 
        
        try{
            user.findOne({
                "username": req.user.username
            })
            .then((document)=>{
                return resolve(document)
            })
            .catch((e)=>{
                res.status(401).send("Can't find username, please contact Admin")
                throw new Error("Can't find username, please contact Admin")
            })
        }
        catch(e){
            res.status(401).send("Error when verify user, please login again")
            reject(new Error("Have error when verify user"))
        }
    })
    let isDuplicate = new Promise((resolve, reject)=>{
            isTitleDuplicate(req.body.title).then((isDup)=>{
                return resolve(isDup)
            })
            .catch((e)=>{
                reject(e)
            })
        })

    try {
        Promise.all([writer, isDuplicate])
        .then(([writer,isDuplicate])=>{
            if (isDuplicate){
                res.status(402).send("Title is exist or duplicate")
            }else{
                writer._
                newPost = new post({
                    _writter: writer._id,
                    title : req.body.title,
                    content: req.body.content,
                    date: new Date()
                 })
                 newPost.save().then(()=>{
                    return writer.updateOne({$push: {_post: newPost._id}})
                 })
                 .then(()=>{
                    res.status(202).send("New Post was pushed into user")
                 })
                 .catch((e)=>{
                    res.status(402).send("Cannnot push post into user")
                    throw e
                 })
                
            }
        })
        .catch((e)=>{
            console.log(1)
            console.log(e)
        })
    }
    catch(e){
        console.log(2)
        console.log(e)
       
    }
}
module.exports = postBlog