var express = require('express');
var router = express.Router();
var config = require('../config.json');
var objectType = config.viewer;
var User = require('../models/user');

router.use(function(req, res, next){
	if(typeof req.objectType !== 'undefined'){
        objectType = req.objectType;  
    } else{
        objectType = config.viewer;
    }
    next();  
})

/* GET home page. */
router.get('/', function(req, res) {
    var user;
    User.find({token: req.cookies.token}, function(err, user){
        if(!err){
            console.log(user);
            res.render('pages/index', {user: user, objectType: objectType });
        }
    });
    
});


module.exports = router;