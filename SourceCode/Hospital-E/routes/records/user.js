var express = require('express');
var router = express.Router();
var User = require("../../models/user");
var config = require('../../config.json');
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
		var complete = {
			com: req.query.complete
		}
		User.getDataUser(req.auth.data._id, (err, user) => {
			if (err || !user){
				res.render('pages/error',
					{ objectType: config.viewer, message: 'Lỗi server!', codeError: 500});
			} else{
				res.render('pages/user', {com: complete, user: user, objectType: objectType});
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
	});

router.get("/update", (req, res, next) => {
	var gender;
	if(req.query.sex == "male"){
		gender = 0;
	}else{
		gender = 1;
	}
	var data = {
			name: req.query.name,
			card: req.query.card,
			phoneNumber: req.query.phoneNumber,
			birthday: req.query.birthday,
			sex: gender,
			address: req.query.address,
			userName: req.query.userName
	}
	User.update({token: req.cookies.token}, {$set: data}, (err, user) => {
		if(err){
			console.log(err);
			res.send("err");
		}else{
			//res.send("Yesys");
			res.redirect("/ho-so/tai-khoan?complete=true");
		}
	});
});




module.exports = router;