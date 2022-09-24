
const post = require("../../Model/post")


async function isTitleDuplicate(newPostTitle){
    console.log("checking title... /Server/Middleware/tool/isTitleDuplicate")
    let isDuplicate = await post.findOne({
        title: {$regex: new RegExp(newPostTitle,"i")}
    })
    .then((result)=>{
        console.log("eeeeee")
        if(result){
            console.log("Title is duplicate /Server/Middleware/tool/isTitleDuplicate")
            return true
        }else{
            console.log("Title is not duplicate /Server/Middleware/tool/isTitleDuplicate")
            return false
        }
    })
    .catch((e)=>{
        throw e
    })
    return isDuplicate
    
}

module.exports = isTitleDuplicate