
const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
    '_writter': {type : mongoose.Schema.Types.ObjectId, ref : 'User'},
    'title': {type: String, require: true},
    'content': {type: Object, require: true},
    'date': {type: Date}
})
module.exports = mongoose.models.Post || mongoose.model('Post',postSchema,'Post')