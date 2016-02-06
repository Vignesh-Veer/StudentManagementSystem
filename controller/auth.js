var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var Student = require('../models/student');
var Staff = require('../models/staff');


exports.signupstudent = function(req, res, next){
  var registeringStudent = req.body.student;

  if(typeof registeringStudent.phone == 'undefined' || registeringStudent.phone == ''){
  res.status(400).send('phone is missing');
  return next();
} else {
  var phone = registeringStudent.phone;
  if(phone.substr(0, 3) != '+91' && phone.split(phone.substr(0, 3))[1].length != 10) {
    res.status(400).send('Phone number should belong to India.');
    return next();
  }
}

if(typeof registeringStudent.email == 'undefined' || registeringStudent.email == ''){
    res.status(400).send('email is missing');
    return next();
  }

  Student.findOne({'phone': registeringStudent.phone}, function(err, student){
    if(err){
    res.status(400).send('error lookingup phone');
    return next(); }
    if(student){
      res.status(400).send('phone already exists');
      return next();
    } else if(!student){
      Student.findOne({'email': registeringStudent.email}, function(err, student){
        if(err){
        res.status(400).send('error lookingup email');
        return next(); }
        if(student){
          res.status(400).send('email already exists');
          return next();
        } else if(!student){
          registeringStudent.status = 'Active';
          Student.create(registeringStudent, function(err, loggedInStudent){
            if(err) error.processError(err, req, res);
            if(!loggedInStudent){
              res.status(400).send('error saving in student');
              return next();
            }
            if(loggedInStudent){
              loggedInStudent.createSession(function(err, student){
                if(err){
                  res.status(400).send('error logging in student');
                  return next();
                } else if(student){
                  student._password = '';
                  student.updatedAt = '';
                  JSON.stringify(student);
                  res.status(200).send(new Response.respondWithData(student));
                  return next();
                }
              });
            }
          });
        }
      });
    }
  });
}

exports.loginstudent = function(req, res, next){
  var student = req.body.student;
  var password = user.password;

  if(typeof student.phone == 'undefined' || student.phone == ''){
    res.status(400).send('phone is missing');
    return next();
  } else {
    var phone = student.phone;
    if(phone.substr(0, 3) != '+91' && phone.split(phone.substr(0, 3))[1].length != 10) {
      res.status(400).send('Phone number should belong to India.');
      return next();
    }
  }

  if(typeof student.email == 'undefined' || student.email == ''){
      res.status(400).send('email is missing');
      return next();
    }


  Student.findOne({'phone': student.phone} || {'email': student.email} || {'rollno': student.rollno}, function(err, student){
    if(err){
      res.status(400).send('error lookingup student');
      return next();
    } else if(!student) {
      res.status(400).send('No student exists');
      return next();
    } else if(student){
          if (password !== existing) {
          res.status(400).send('Password is wrong');
          return next();
        } else {
        student.createSession(function(err, student){
          if(err){
            res.status(400).send('error logging in student');
            return next();
          } else if(student){
            res.status(200).send(new Response.respondWithData(student));
            return next();
          }
        });
      }
    }
  });
}


exports.signupstaff = function(req, res, next){
  var registeringStaff = req.body.staff;

  if(typeof registeringStaff.phone == 'undefined' || registeringStaff.phone == ''){
  res.status(400).send('phone is missing');
  return next();
} else {
  var phone = registeringStaff.phone;
  if(phone.substr(0, 3) != '+91' && phone.split(phone.substr(0, 3))[1].length != 10) {
    res.status(400).send('Phone number should belong to India.');
    return next();
  }
}

if(typeof registeringStaff.email == 'undefined' || registeringStaff.email == ''){
    res.status(400).send('email is missing');
    return next();
  }

  Staff.findOne({'phone': registeringStaff.phone}, function(err, staff){
    if(err){
    res.status(400).send('error lookingup phone');
    return next(); }
    if(staff){
      res.status(400).send('phone already exists');
      return next();
    } else if(!staff){
      Staff.findOne({'email': registeringStaff.email}, function(err, staff){
        if(err){
        res.status(400).send('error lookingup email');
        return next(); }
        if(staff){
          res.status(400).send('email already exists');
          return next();
        } else if(!staff){
          registeringStaff.status = 'Active';
          Staff.create(registeringStaff, function(err, loggedInStaff){
            if(err) error.processError(err, req, res);
            if(!loggedInStaff){
              res.status(400).send('error saving in user');
              return next();
            }
            if(loggedInStaff){
              loggedInStaff.createSession(function(err, staff){
                if(err){
                  res.status(400).send('error logging in user');
                  return next();
                } else if(staff){
                  staff._password = '';
                  staff.updatedAt = '';
                  JSON.stringify(user);
                  res.status(200).send(new Response.respondWithData(staff));
                  return next();
                }
              });
            }
          });
        }
      });
    }
  });
}

exports.loginstaff = function(req, res, next){
  var staff = req.body.staff;
  var password = user.password;

  if(typeof staff.phone == 'undefined' || staff.phone == ''){
    res.status(400).send('phone is missing');
    return next();
  } else {
    var phone = staff.phone;
    if(phone.substr(0, 3) != '+91' && phone.split(phone.substr(0, 3))[1].length != 10) {
      res.status(400).send('Phone number should belong to India.');
      return next();
    }
  }

  if(typeof staff.email == 'undefined' || staff.email == ''){
      res.status(400).send('email is missing');
      return next();
    }


  Staff.findOne({'phone': staff.phone} || {'email': staff.email} || {'staffno': staff.staffno}, function(err, staff){
    if(err){
      res.status(400).send('error lookingup user');
      return next();
    } else if(!staff) {
      res.status(400).send('No staff exists');
      return next();
    } else if(staff){
        if (password !== existing) {
          res.status(400).send('Password is wrong');
          return next();
        } else {
        staff.createSession(function(err, staff){
          if(err){
            res.status(400).send('error logging in staff');
            return next();
          } else if(staff){
            res.status(200).send(new Response.respondWithData(staff));
            return next();
          }
        });
      }
    }
  });
}
