const router = require('express').Router();
const petshopService = require('../services/petshopServices');
​
// router.get('/', petshopService.getPets);
// router.get('/:id', petshopService.getPetById);
​
router.post('/', petshopService.addPet);
​
// router.put('/:id', petshopService.updatePet);
// ​
// router.delete('/:id', petshopService.deletePet);
// ​
module.exports = router;