var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'STEMyths' });
});

/* GET paths page. */
router.get('/paths', function(req, res, next) {
  res.render('paths', { title: 'STEMyths' });
});

/* GET myth1 page. */
router.get('/myth1', function(req, res, next) {
  res.render('myth1', { title: 'STEMyths' });
});


module.exports = router;
