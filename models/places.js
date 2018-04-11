var mongoose = require('mongoose');
var placeSchema = mongoose.Schema({
  place_name:{
    type:String,
    required:true
  },
  place_desc:{
    type:String,
    required:false
  },
  place_img:{
    type:String,
  }
});

var Place  = module.exports = mongoose.model('Place',placeSchema)