const jwt = require('jsonwebtoken')
function provideAccessJWT(req,res){
    const accToken = jwt.sign(req.user, 'blogtee;accessToken')
    res.status(201).send({token: accToken});
}

module.exports = provideAccessJWT