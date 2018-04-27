var express = require('express');
var router = express.Router();
var User = require("../models/user.model");
var config = require('../config.json');
var objectType = config.viewer;
// chua toi uu, nen cho vao file middle ware
// chua bao mat tot
router.use(function(req, res, next){
	if(typeof req.objectType !== 'undefined'){
        objectType = req.objectType;  
    } else{
        objectType = config.viewer;
    }
    next();  
})

router.use(function(req, res, next){
	if (objectType != config.user && objectType != config.admin && objectType != config.doctor){
		return  res.render('pages/error',
			{ objectType: config.viewer, message: 'Không có quyền truy cập!', codeError: 401});
	}
	return next();
})

router.route('/')
	.get(function(req, res, next){
		User.getDataUser(req.auth.data._id, (err, user) => {
			if (err || !user){
				res.render('pages/error',
					{ objectType: config.viewer, message: 'Lỗi server!', codeError: 500});
			} else{
                res.send(user)
				// res.render('pages/informationAllUser', {user: user, objectType: objectType});
			}
		});
	})
	.patch(function(req, res, next){
	    User.updates(req.body.data, (err, user) => {
	        if (err|| !user){
	            res.render('pages/error',
					{ objectType: config.viewer, message: 'Lỗi server!', codeError: 500});
	        } else{
	            // render to information
	            res.send("thanhcong");
	        }
	    });
	})

module.exports = router;