const authController = require('./Controllers/auth-controller');
const userController = require('./Controllers/user-controller');
const commentController = require('./Controllers/comment-controller');
const postController = require('./Controllers/post-controller');


module.exports = (app) => {

  app.get('/', (req, res) => {
    res.send()
  })

  app.post('/findbyname', userController.findByName);
  app.post('/edituser', userController.editUser);
  // app.post('add-friend', userController.addFriend);

  app.post('/signup', authController.signup)
  // app.post('/login', authController.login)
  // app.post('/checkifloggedin', authController.checkIfLoggedIn)

  //comment controller
  app.post('/addComment', commentController.addComment)
  app.post('/editComment', commentController.editComment)
  app.post('/findComments', commentController.findComments)
  app.post('/deleteComment', commentController.deleteComment)

  // //post controller
  app.post('/addPost', postController.addPost)
  app.post('/editPost', postController.editPost)
  app.post('/deletePost', postController.deletePost)

}