const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
//   author: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: {type: Date, default: Date.now},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],  //get comment ID
})

module.exports = mongoose.model('Post', PostSchema);