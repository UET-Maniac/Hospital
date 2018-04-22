var express = require('express');
var router = express.Router();

/* GET  page/dat-lich-hen. */
router.get('/', function(req, res, next) {
    res.render('pages/dat-lich-hen', {objectType: 0});
});

module.exports = router;