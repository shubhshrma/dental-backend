var mongoose = require('mongoose');
var PerformaSchema = mongoose.Schema({
  
  patient_id:{
    type:String,
    required:true
  },
  doctor_id:{
    type:String,
    required:true
  },
  treatment_id:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now()
  }
  
});

var Performa  = module.exports = mongoose.model('Performa',PerformaSchema)