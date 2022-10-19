var mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost/a')

 var userschema = mongoose.Schema({
   name:String,
   mobile:Number,
   email:String
   

 })
module.exports = mongoose.model('user',userschema);