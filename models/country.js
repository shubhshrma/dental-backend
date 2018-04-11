var mongoose = require('mongoose');
var countrySchema = mongoose.Schema({
  country_name:{
    type:String,
    required:true
  },
  country_description:{
    type:String,
    required:false
  },
  country_img:{
    type:String,
    required:false
  }
});

var Country  = module.exports = mongoose.model('Country',countrySchema)