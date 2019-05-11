const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
//   author: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: {type: Date},
//   comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
  likeCount: {type: Number, default: 0}
})

module.exports = mongoose.model('Post', PostSchema);