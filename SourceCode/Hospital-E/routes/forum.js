var express = require('express');
var router = express.Router();
var config = require('../config.json');
var objectType = config.viewer;

router.use(function(req, res, next){
	if(typeof req.objectType !== 'undefined'){
        objectType = req.objectType;  
    } else{
        objectType = config.viewer;
    }
    next();  
})

/* GET main forum. */
router.get('/', function(req, res, next) {
    res.render('pages/forum', {objectType: objectType});
});

module.exports = router;