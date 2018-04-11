var mongoose = require('mongoose');
var PatientSchema = mongoose.Schema({
  patient_name:{
    type:String,
    required:true
  },
  patient_email:{
    type:String
    
  },
  patient_contact:{
    type:Number
  }
  
});

var Patient  = module.exports = mongoose.model('Patient',PatientSchema)