const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username : {type: String, require: true},
    password: {type: String, require: true},
    date : Date,
    _post: [{type: mongoose.Schema.Types.ObjectId, ref: 'post'}]

})
module.exports = mongoose.model('user', userSchema, 'User')