var mongoose = require('mongoose');
var InstituteSchema = mongoose.Schema({
  treatment_id:{
    type:String,
    required:true
  },
  institute_name:{
    type:String
  },
  treatment_name:{
    type:String,
    required:false
  },
  country_id:{
    type:String,
    required:true
  },
  cost:{
    type:Number,
    required:true,
    default:0
  },
  holiday_code:{
    type:String,
    required:false, 
  },
  location_id:{
    type:String
  },
  location_name:{
    type:String
  },
  institute_desc:{
    type:String
  }
  
});

var InstituteTreatment  = module.exports = mongoose.model('InstituteTreatment',InstituteSchema)
