var authController = require('./controller/auth.js');

module.exports = function(app){
  app.post('/api/user/signupstudent', authController.signupstudent);
  app.post('/api/user/loginstudent', authController.loginstudent);
  app.post('/api/user/signupstaff', authController.signupstaff);
  app.post('/api/user/loginstaff', authController.loginstaff);

}
