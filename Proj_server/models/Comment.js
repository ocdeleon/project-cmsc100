const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
	author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	content: {type: String, required: true},
	timestamp: {type: Date, default: Date.now}
});

module.exports = mongoose.model ('Comment', CommentSchema);
