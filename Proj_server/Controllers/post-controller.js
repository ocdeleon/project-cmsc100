const Post = require('mongoose').model('Post');
const User = require('mongoose').model('User');

// exports.addPost = (req, res) => {
    // const content = req.body.content;
    // const timestamp = new Date();

exports.addPost = (req, res, next) => {
		const newPost = new Post({
			// author
			content: req.body.content,
			// timestamp: new Date()	//already added using default
		})
    newPost.save((err) => {
		if(!err){res.send(newPost)}
		// else{res.json('Unable to add post')}
		else{res.send('Unable to add post')}
	});
}

//look for the post with the ID request then edit the content
exports.editPost = (req, res, next) => {
	Post.updateOne({_id: req.params._id}, {content: req.body.content}, (err, post) => {
		if(!err) {res.send(post)}
	})
}