const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username : {type: String, require: true},
    password: {type: String, require: true},
    date : Date,
    _post: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]

})
module.exports = mongoose.models.User || mongoose.model('User', userSchema, 'User')