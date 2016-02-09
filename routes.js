var authController = require('./controller/auth.js');

module.exports = function(app){
  app.post('/api/student/signupstudent', authController.signupstudent);
  app.post('/api/student/loginstudent', authController.loginstudent);
  app.post('/api/staff/signupstaff', authController.signupstaff);
  app.post('/api/staff/loginstaff', authController.loginstaff);

}
