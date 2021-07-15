
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
employees.insertMany(data, function(err, result) {
  if (err) {
    res.send(err);
  } else {
    res.send(result);
  }
});

module.exports = router;
