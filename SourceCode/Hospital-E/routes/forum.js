var express = require('express');
var router = express.Router();

/* GET main forum. */
router.get('/', function(req, res, next) {
    res.render('pages/forum');
});

module.exports = router;