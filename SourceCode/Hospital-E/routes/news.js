var express = require('express');
var router = express.Router();

/* GET page News */
router.get('/', function(req, res, next) {
    res.render('pages/news');
});

module.exports = router;
