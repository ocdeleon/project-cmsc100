const Comment = require('mongoose').model('Comment');

//paramters: content of comment
exports.addComment = (req, res, next) => {
    const newComment = new Comment({
        // author
        content: req.body.content,
        // timestamp: new Date()	//already added using default
    })

    newComment.save((err) => {
        if(!err){res.send(newPost)}
        // else{res.json('Unable to add comment')}
        else{res.send('Unable to add comment')}
    });
}

//paramters: ID of comment, content of comment
exports.editComment = (req, res, next) => {
	Post.updateOne({_id: req.params._id}, {content: req.body.content}, (err, comment) => {
        if(!err) {res.send(post)}
        else{
            res.send("Cannot edit comment")
        }
	})
}

//parameters: ID of comment
exports.findComments = (req, res) => {
    Comment.find({}, (err, comments) => {
        if(err){
            res.send("Nothing found")
        }
        else {
            res.send(comments)
        }
    })
}

//parameters: ID of comment
exports.deleteComment = (req, res, next) => {
	Comment.findOneAndDelete({_id: req.body.id}, (err, comment) =>{
		if(!err && comment){
			res.send("Deleted comment")
		} else {
			res.send("Unable to delete comment")
		}
	})
}