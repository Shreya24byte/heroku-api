const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/studentsList', function(req,res){
  res.send({results:["Rajesh", "Ramesh", "Suresh", "Sanjana"]});
})
module.exports = router;
