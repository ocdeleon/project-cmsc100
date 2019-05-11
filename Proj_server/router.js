const authController = require('./Controllers/auth-controller');
const userController = require('./Controllers/user-controller');
const commentController = require('./Controllers/comment-controller');
const postController = require('./Controllers/post-controller');


module.exports = (app) => {

  app.get('/find-by-name', userController.findByName);
  app.post('/edit-user', userController.findByName);
  // app.post('add-friend', userController.addFriend);

  app.post('/signup', authController.signup)
  app.post('/login', authController.login)
  app.post('/checkifloggedin', authController.checkIfLoggedIn)
}