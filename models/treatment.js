var mongoose = require('mongoose');
var treatmentSchema = mongoose.Schema({
  treat_name:{
    type:String,
    required:true
  },
  treat_description:{
    type:String,
    required:false
  },
  treat_img:{
    type:String,
    required:false
  }
});

var Treatment  = module.exports = mongoose.model('Treatment',treatmentSchema)
