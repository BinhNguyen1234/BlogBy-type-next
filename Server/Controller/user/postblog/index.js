const user = require("../../../Model/user")
const post = require("../../../Model/post")
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

    try {
        Promise.all([writer])
        .then(([writer])=>{
                newPost = new post({
                    _writter: writer._id,
                    title : req.body.title,
                    content: req.body.content,
                    date: new Date(),
                    url: req.body.title.toLowerCase().normalize('NFD')// lowercase and  parse Vietnamese code to latin code + sign of Vietnamese code
                                                    .replace(/\u0111/gm,"d") // replace "đ" by "d"
                                                    .replace(/[\u0300-\u036f]|[^\w\s]|[\W]+$/gm,"") //remove sign of Vietnamese code, non-word, space end of string
                                                    .replace(/\s+\s|\s/gm,"-") // replace white spaces by "-"

                 })
                
                return newPost.save()
                 .then((newPost)=>{
                    return writer.updateOne({$push: {_post: newPost._id}})
                 })
                 .catch((e)=>{
                    res.status(402).send("Duplicate Title")
                    throw e
                })
                 .then((document)=>{
                    res.status(202).send("New post was be save in user sucesss")
                    
                 })
                
               
                 
                 
               
                
                
                
            
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    catch(e){
        console.log(e)
    }
}
module.exports = postBlog