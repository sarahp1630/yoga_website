var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  //res.send('Ask Questions');
  res.render('askquestions', { title: 'Ask Questions' });
});

module.exports = router;
