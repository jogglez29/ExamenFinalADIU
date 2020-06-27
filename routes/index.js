var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'home' });
});

/* Entramos al acerca de. */
router.get('/AcercaDe', function(req, res, next) {
  res.render('AcercaDe', { page: 'Acerca De' });
});

module.exports = router;
