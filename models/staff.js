var mongoose = require('mongoose');

var statustypes = ["active","inactive"];

var staffSchema = new mongoose.Schema({
  name      : {type: String, required: true},
  staffId   : {type: Number, required: true,unique: true},
  password  : {type: String, required: true},
  phone     : {type: Number, required: true,unique: true},
  address   :
  {
    doorNo : {type: String},
    street : {type: String},
    city   : {type: String},
    state  : {type: String},
    pincode : {type: String}
  },
  email     : {type: String, required: true,unique: true},
  dob       : {type: Date},
  status    : {type:String,enum:statustypes},
  deptId    : {type: mongoose.Schema.Types.ObjectId, ref:'dept'},
  createdAt : {type: Date},
  updatedAt : {type: Date},
}, {collection: 'staff'});

var Staff = mongoose.model('staff' , staffSchema);
module.exports = Staff;
