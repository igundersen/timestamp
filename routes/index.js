var express = require('express');
var time = require('../models/time.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { host: req.headers.host, title: '' });
});

router.get('/:datestring', function(req, res, next) {
  time(req.params.datestring, function(data) {
    res.json(data);
  })
});

module.exports = router;
