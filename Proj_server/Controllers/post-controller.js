const Post = require('mongoose').model('Post');
const User = require('mongoose').model('User');

exports.addPost = (req, res) => {
    const content = req.body.content;
    const timestamp = new Date();

    newPost.save((err,post) => {
		if(err){
			res.send({});
		}
		else{
			res.json(post);
		}
	});

}