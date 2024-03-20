var express = require('express');
var router = express.Router();
const userModel = require('./users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// for create 
router.get("/create",async function(req,res){
  let createdUser = await userModel.create({
    username:"manthan2411",
    name:"manthan",
    age:20
  
  })
  res.send(createdUser)
})
//in this we can see allusers
router.get("/allusers",async function (req,res){
  let allUsers = await userModel.find();
  res.send(allUsers);
})


//in this section we can find particular user from all users
router.get("/seeuser", async function(req,res){
  let seeuser = await userModel.findOne({username:'manan123'})
  res.send(seeuser)
})

//in this we can delete user from all users
router.get("/delete1", async function (req,res){
  let deleteduser = await userModel.findOneAndDelete({
    username:"manthan2411"
  })
  console.log(deleteduser)
  res.send(deleteduser);
})

module.exports = router;
