const user = require("../../../Model/user")
const post = require("../../../Model/post")

async function postBlog(req,res){
    let writer;
    try {
        writer = await user.findOne({
        "username": req.user.username}).populate("_post").exec(function (err, story) {
            if (err) {
                console.log(err)
            }else
            console.log(story);
          })
        console.log(writer)
        res.status(202).send(writer)
}
catch{(e)=>{
    console.log("co loi")
}}
}
module.exports = postBlog