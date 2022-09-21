
const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
    '_writter': {type : mongoose.Schema.Types.ObjectId, ref : 'user'},
    'title': {type: String, require: true},
    'content': {type: Object, require: true},
    'date': {type: Date}
})
module.exports = mongoose.model('post',postSchema,'Post')