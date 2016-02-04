var mongoose = require('mongoose');

var statustypes = ["active","inactive"];

var studentSchema = new mongoose.Schema({
  name      : {type: String, required: true},
  rollNo    : {type: Number, required: true},
  password  : {type: String, required: true},
  phone     : {type: Number, required: true},
  bloodGroup : {type: String},
  address   :
  {
    doorNo : {type: String},
    street : {type: String},
    city : {type: String},
    state : {type: String},
    pincode : {type: String}
  },
  email     : {type: String, required: true},
  dob       : {type: Date},
  deptId    : {type: mongoose.Schema.Types.ObjectId, ref:'dept'},
  status    : {type:String,enum:statustypes},
  createdAt : {type: Date},
  updatedAt : {type: Date},
}, {collection : 'student'});

var Student =  mongoose.model('student',studentSchema);
module.exports = Student;
