const user = require('../../../Model/user');
const post = require('../../../Model/post');
async function editblog(req, res) {
   const query = req.query.page;
   const skip = (query && query > 0 ? query : 0) - 1;
   let ListBlog = await user.findOne({ username: req.user.username }).populate({
      path: '_post',
      select: { title: 1, url: 1, _id: 0, date: 1 },
      match: {},
      options: {
         skip: skip * 20,
         limit: 20,
      },
   });
   res.send(ListBlog['_post']);
}

module.exports = editblog;
