const User = require('../../../Model/user');
const Blog = require('../../../Model/post');

async function removePost(req, res) {
   try {
      let Post = await Blog.findOneAndDelete({ url: req.body.url });
      if (Post == null) {
         throw new Error(`Not Found url ${req.body.url}`);
      } else {
         res.status(299).send('Delete success');
      }
      User.findOneAndUpdate(
         { username: req.username },
         { $pull: { _post: Post._id } }
      );
   } catch (e) {
      console.log(e);
      res.status(500).send('Errror sv');
   }
}
module.exports = removePost;
