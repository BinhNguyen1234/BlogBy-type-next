const post = require('../../Model/post');
async function getPost(req, res) {
   const url = req.query.url.toLowerCase();
   const data = await post
      .findOne(
         {
            url: url,
         },
         { title: 1, content: 1, url: 1, imgThumbnail: 1, _id: 0 }
      )
      .then((post) => {
         return {
            imgThumbnail: post.imgThumbnail || 'null',
            title: post.title,
            content: post.content,
         };
      })
      .catch((e) => {
         console.log(e);
         return { error: '404' };
      });
   res.status(299).send(data);
}
module.exports = getPost;
