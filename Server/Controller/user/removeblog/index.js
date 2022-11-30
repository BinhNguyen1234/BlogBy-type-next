const User = require('../../../Model/user');

async function removePost(req, res) {
   res.status(200).send(req.body.url);
}
module.exports = removePost;
