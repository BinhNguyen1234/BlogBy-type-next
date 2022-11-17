const blog = require('../../Model/post');

async function getList(req, res) {
   let page = req.query.page;
   try {
      let rawData = await blog
         .aggregate()
         .sort({ date: -1 })
         .match({})
         .project({
            title: 1,
            date: 1,
            imgThumbnail: 1,
            url: 1,
            contentString: 1,
            _id: 0,
         })
         .skip((page ? page - 1 : 0) * 10)
         .limit(10)
         .catch((e) => {
            throw e;
         });
      let data = rawData.map((object) => {
         return {
            ...object,
            date: object.date.toLocaleDateString(['ban', 'id']),
         };
      });
      res.send(data);
   } catch (e) {
      console.log(e);
      res.status(500).send('Server Error');
   }
}
module.exports = getList;
