var mongoose = require('mongoose');
var InstituteSchema = mongoose.Schema({
  country_name: {
    type: String,
    lowercase: true
  },
  institute_name:{
    type:String
  },
  institute_img:{
    type:String,
    required:false
  },
  institute_web:{
    type:String
  },
  institute_contact:{
    type:String
  },
  institute_type:{
    type:String
  },
  institute_desc:{
    type:String
  },
  
  
});

var Institute  = module.exports = mongoose.model('Institute',InstituteSchema)
