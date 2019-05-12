const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
//   author: { type: String, required: true, ref: 'User'},
  content: { type: String, required: true },
  timestamp: {type: Date, default: Date.now},
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],  //get comment ID
})

module.exports = mongoose.model('Post', PostSchema);