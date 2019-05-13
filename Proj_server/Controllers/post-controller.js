const Post = require('mongoose').model('Post');
const User = require('mongoose').model('User');
// const User = require('mongoose').model('Comment');

exports.addPost = (req, res, next) => {
		const newPost = new Post({
			// author
			content: req.body.content,
			timestamp: new Date()	//already added using default
		})
    newPost.save((err) => {
			if(!err){res.send(newPost)}
			// else{res.json('Unable to add post')}
			else{res.send('Unable to add post')}
		});
}

// exports.addComment = (req, res, next) => {
// 		Post.updateOne({id: req.params._id}, {$set: {content: req.body.content}}, (err, post) => {
// 			if(!err) {res.send(post)}
// 		})
// }

//look for the post with the ID request then edit the content
exports.editPost = (req, res, next) => {
	Post.updateOne({_id: req.params._id}, {$set: {content: req.body.content}}, (err, post) => {
		if(!err) {res.send(post)}
	})
}

//look for id then edit the post
exports.deletePost = (req, res, next) => {
	Post.findOneAndDelete({_id: req.body.id}, (err, post) =>{
		if(!err && post){
			res.send("Deleted post")
		} else {
			res.send("Unable to delete post")
		}
	})
}