const user = require('../../../Model/user');
const post = require('../../../Model/post');
async function GetBlogList(req, res) {
   try {
      const page = req.query.page;
      const key = req.query.key || '';
      const filter = req.query.filter;

      const skip = (page && page > 0 ? page : 0) - 1;
      let ListBlog = await user
         .findOne({ username: req.user.username })
         .populate({
            path: '_post',
            select: { title: 1, url: 1, _id: 0, contentString: 1, date: 1 },
            match:
               filter == 'title'
                  ? { title: new RegExp(`${key}`, 'gmui') }
                  : { contentString: new RegExp(`${key}`, 'gmui') },
            options: {
               skip: skip * 20,
               limit: 20,
            },
         })
         .catch((e) => {
            res.status(400).send('Not accept');
            throw e
         });
      res.status(299).send(ListBlog['_post']);
   } catch (e) {
      console.log(e);
      res.status(500).send('Errror sv');
   }
}
async function EditPost(req, res) {
   let data = req.body;

   let blog = await post
      .findOneAndUpdate({ url: req.query.url }, data, { new: true })
      .then((blog) => {
         res.status(299).send({ url: blog.url });
      })
      .catch((e) => {
         res.status(500).send(e);
      });
}
module.exports = { GetBlogList, EditPost };
