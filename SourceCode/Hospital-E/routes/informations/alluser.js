var express = require('express');
var router = express.Router();
var User = require("../../models/user");
var config = require('../../config.json');
var objectType = config.viewer;
var typeFind = config.findUser;
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
	if (objectType != config.admin){
		return  res.render('pages/error',
			{ objectType: config.viewer, message: 'Không có quyền truy cập!', codeError: 401});
	}
	return next();
})

router.route('/')
	.get(function(req, res, next){
		User.finds('', objectType, typeFind, (err, users) => {
			// can them dieu kiem kiem tra xem co kq hay khong de  bat truong hop ko loi va ko co kq
			if (err || !users.length){
				res.render('pages/error',
					{ objectType: config.viewer, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
			} else{
				res.render('pages/informationAllUser', {users: users, objectType: objectType});
			}
		});
	})
	.put(function(req, res, next){
		var data = '';
		if (req.body.data) data = req.body.data;
		User.finds(data, objectType, typeFind, (err, users) => {
			if (err || !users.length){
				res.render('pages/error',
					{ objectType: config.viewer, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
			} else{
				res.render('pages/informationAllUser', {users: users, objectType: objectType});
			}
		});
	})
	.post(function(req, res, next){
	    User.inserts(req.body.data, (err, user) => {
	        if (err || !user){
	            res.render('pages/error',
					{ objectType: config.viewer, message: 'Dữ liệu đã tồn tại!', codeError: 409});
	        } else{
	            // render to information
	            res.send("thanhcong");
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
	.delete(function(req, res, next){
	    User.deletes(req.body.data._id, (err, user) => {
	        if (err || !user){
	            res.render('pages/error',
					{ objectType: config.viewer, message: 'Lỗi server!', codeError: 500});
	        } else{
	            // render to information
	            res.send("thanhcong");
	        }
	    });
	})

module.exports = router;