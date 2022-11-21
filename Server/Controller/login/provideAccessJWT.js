const jwt = require('jsonwebtoken');
function provideAccessJWT(req, res) {
   const accToken = jwt.sign(req.user, 'blogtee;accessToken');
   res.status(201).cookie("acc", accToken, { maxAge: 1000 * 60 * 60 * 4 }).send("Ok");
}

module.exports = provideAccessJWT;
