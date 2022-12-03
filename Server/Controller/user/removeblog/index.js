const User = require('../../../Model/user');

async function removePost(req, res) {
   try {
      let ListBlog = await User.findOne({ username: req.user.username })
         .populate({
            path: '_post',
            match: {},
         })
         .catch((e) => {
            console.log(e);
            res.status(400).send('Not accept');
         });
      console.log(ListBlog);
      res.status(299).send(ListBlog['_post']);
   } catch (e) {
      console.log(e);
      res.status(500).send('Errror sv');
   }
}
module.exports = removePost;
