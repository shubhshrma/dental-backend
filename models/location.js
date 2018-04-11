var mongoose = require('mongoose');
var LocationSchema = mongoose.Schema({
  location_name:{
    type:String,
    required:true
  },
  location_desc:{
    type:String,
    required:false
  },
  holiday:{
    type:String,
  }
});

var Location  = module.exports = mongoose.model('Location',LocationSchema)