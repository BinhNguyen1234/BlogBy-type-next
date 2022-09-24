
const post = require("../../Model/post")


async function isTitleDuplicate(newPostTitle){
    console.log("checking title... /Server/Middleware/tool/isTitleDuplicate")
    let isDuplicate = await post.findOne({
        $text : {title: newPostTitle}
    })
    .then((result)=>{
        if(result){
            console.log("Title is duplicate /Server/Middleware/tool/isTitleDuplicate")
            return true
        }
    })
    .catch((e)=>{
        if(e){
            console.log("Title is not duplicate /Server/Middleware/tool/isTitleDuplicate")
            return false
        }
    })
    return isDuplicate
}

module.exports = isTitleDuplicate