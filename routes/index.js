var express = require('express');
var router = express.Router();
const usermodel = require('./users');
const taskmodel = require('./task');
const { name } = require('ejs');


router.get('/adduser',function(req,res){
  res.render('adduser')
})
router.get('/task',function(req,res){
  usermodel.find()
  .then(function(data){
   console.log(data)
   res.render('task',{data})
  }) 
})
router.post('/useradd',function(req,res){
  usermodel.create({
    name:req.body.name,
    email:req.body.email,
    mobile:req.body.mobile
  })
  .then(function(){
    // console.log(name)
    res.redirect('back')
  })
})
router.post('/taskadd',function(req,res){
  taskmodel.create({
    user:req.body.user,
    taskname:req.body.taskname,
    tasktype:req.body.tasktype,
   
  })
  .then(function(){
    // console.log(name)
    res.redirect('back')
  })
})
router.get('/',async function(req, res, next) {
 let user= await usermodel.find();
 
  let task= await taskmodel.find();
  console.log(task)
  res.render('index',{data:user,data1:task})
 }) 

// router.get('/', function(req, res, next) {
//   taskmodel.find()
//   .then(function(data1){
//   //  console.log(data)
//    res.render('index',{data1})
//   }) 
//  });

module.exports = router;
