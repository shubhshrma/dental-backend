var mongoose = require('mongoose');
var DoctorSchema = mongoose.Schema({
  doctor_name:{
    type:String,
    required:true
  },
  doctor_desc:{
    type:String,
    required:true
  },
  doctor_quali:{
    type:String,
    required:true
  },
  doctor_email:{
    type:String
    
  },
  doctor_phone:{
    type:Number
  },
  institute_id:{
  type:String,
  required:true
 }
  
});

var Doctor  = module.exports = mongoose.model('Doctor',DoctorSchema)