const user = require('../../../Model/user');
const post = require('../../../Model/post');
async function GetBlogList(req, res) {
   const page = req.query.page;
   const key = req.query.key || ""
   const skip = (page && page > 0 ? page : 0) - 1;
   let ListBlog = await user.findOne({ username: req.user.username }).populate({
      path: '_post',
      select: { title: 1, url: 1, _id: 0, date: 1 },
      match: {"title": new RegExp(`${key}`,"gmui")},
      options: {
         skip: skip * 20,
         limit: 20,
      },
   });
   res.send(ListBlog['_post']);
}
async function EditPost(req, res) {
   let data = req.body;
   console.log(data);

   let blog = await post
      .findOneAndUpdate({ url: req.query.url }, data, { new: true })
      .then((blog) => {
         res.send({ url: blog.url });
      })
      .catch((e) => {
         res.status(500).send(e);
      });
}
module.exports = { GetBlogList, EditPost };
