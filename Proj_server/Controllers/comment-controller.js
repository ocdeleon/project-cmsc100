const Comment = require('mongoose').model('Comment');

exports.addComment = (req, res) => {
    //add Id of commenter
    const content = req.body.content;
    const timestamp = new Date();

    if(!err){
        res.send(false)
    }
    else{
        const NewComment = new Comment({
          //author
          //content
          //timestamp  
        });
    }

}

exports.editComment = (req, res) => {
    
    // const query = {_id: req.params._id};
    const content = req.body.content
    // const timestamp = new Date();

    Comment.updateOne(/*{query}, */{err, subject}) => {
        if(err){
            // res.send({});
        }
        else{
            res.send(subject)
        }
    }
}

exports.deleteComment = (req, res) => {
    // const id = req.body._id

    Comment.remove({_id}, (err) => {
        if(err){
            res.send(false)
        }
        else{
            res.send(true)
        }
    })
}

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