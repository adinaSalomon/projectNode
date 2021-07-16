const express=require('express');
const Pets = require('../models/Pets');
 var router=express.Router();
const pets=require('../models/Pets');
router.get('/',function(req,res,next){
  res.send([{name:"adina"}])
});

router.delete('/:id', function (req, res, next) {
 Pets.findOneAndDelete({id:req.params.id}).then(function(pet){
   res.send(pet);
 })
});
router.put('/update/:id',function(req,rea,next){
  Pets.findOneAndUpdate({_id:req.params.id},req.body).then(
    function(pet){pets.findOne({_id:req.params.id}).then(function(pet){
      res.send(pet.name);
    })}
  )
})
router.post('/addalot', function (req, res, next) {
  pets.insertMany(req.body, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
router.get('/getall', function (req, res, next) {
  pets.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
router.post('/addpet', function (req, res, next) {
  pets.create(req.body).then(function (p) {
    res.send(p);
  }).catch(next);
});
module.exports=router;