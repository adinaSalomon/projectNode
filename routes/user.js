const express=require('express');
const Pets = require('../models/Pets');
 var router=express.Router();
///יש לי בעיה הוא משום מה באמת מוחק ולא עושה שגיאה
router.delete('/:id',async function (req, res, next) {
  try {
    await Pets.findByIdAndDelete(req.params.id);
    res.status(201);
} catch (error) {
    res.status(500).send(error);
}
});

router.get('/:id',async function (req, res, next){try {
  let pet = await Pets.findById(req.params.id);
  res.status(200).json(pet);
} catch (error) {
  res.status(500).send(error.message);
}})
//כנל פה לא באמת מידכן לי ולא עושה שגיאה
router.put('updatePet/:id',async function(req,rea,next){
  try {
    const petUpdate = await Petshop.findByIdAndUpdate(req.params.id, req.body);
    console.log(petUpdate);
    res.status(200).send('pet update succeed');
} catch (error) {
    res.status(500).send(error);
}
 
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
router.get('/getall', async function (req, res, next) {
  try {
    let pets = await Pets.find();
    res.status(200).json(pets);
} catch (error) {
    res.status(500).send(error.message);
}
});
router.post('/addpet',async function (req, res, next) {
  const pet = new Pets({
    name: req.body.name,
    species: req.body.species,
});
try {
    await pet.save();
    res.status(200).json(pet);
} catch (error) {
    res.status(500).send(error.message);
}
});
module.exports=router;