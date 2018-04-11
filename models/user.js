var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  id:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
});

var User  = module.exports = mongoose.model('User',userSchema)
