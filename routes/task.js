var mongoose = require('mongoose');
 
 var taskschema = mongoose.Schema({
   taskname: String,
   tasktype:String,
   user:String

 })
module.exports = mongoose.model('task',taskschema);