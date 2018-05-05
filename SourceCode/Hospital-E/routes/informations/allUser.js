var express = require('express');
var router = express.Router();
var User = require("../../models/user");
var config = require('../../config.json');
var upload = require('../../middlewares/uploadImage');
var objectType = config.viewer;
var typeFind = config.admin;
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
			{ objectType: objectType, message: 'Không có quyền truy cập!', codeError: 401});
	}
	return next();
})

router.route('/')
	.get(function(req, res, next){
		User.finds('', objectType, typeFind, (err, users) => {
			// can them dieu kiem kiem tra xem co kq hay khong de  bat truong hop ko loi va ko co kq
			if (err || !users.length){
				res.render('pages/error',
					{ objectType: objectType, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
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
				res.render('pages/errorTemplate',
					{message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
			} else{
				res.render('pages/listUsers', {users: users});
			}
		});
	})
	.post(upload.single('image'), function(req, res, next){
        var data = {
			name: req.body.name,
			sex: req.body.sex,
			objectType: req.body.objectType
		}
	    if(req.body.card){
		    data.card = req.body.card
	     }
	     if(req.body.phoneNumber){
		    data.phoneNumber = req.body.phoneNumber
	    }
	    if(req.body.birthday){
		    data.birthday = req.body.birthday
        }
		if(req.body.address){
		    data.address = req.body.address
		}
		if(req.body.userName){
		    data.userName = req.body.userName
		}
		if(req.body.password){
		    data.password = req.body.password
		}
		if(req.body.level){
		    data.level = req.body.level
		}
		if(req.body.experience){
		    data.experience = req.body.experience
		}
		if(req.body.departmentId){
		    data.departmentId = req.body.departmentId
		}
		if(req.body.dean){
		    data.dean = req.body.dean
		}
	    if (req.file){
            // cắt 'puclic' đi
            data.image= req.file.path.substr(6,req.file.path.length);
		}
	    User.inserts(data, (err, user) => {
		    if (err|| !user){
			    res.render('pages/errorTemplate',
					{message: 'Dữ liệu đã tồn tại!', codeError: 409});
		     } else{
				res.render('pages/listUsers', {users: [user], objectType: objectType});
		    }
	    });
	})
	.patch(upload.single('image'), function(req, res, next){
		var data = {
			_id: req.body._id,
			name: req.body.name,
			sex: req.body.sex,
			objectType: req.body.objectType,
			active: req.body.active
	    }
	    if(req.body.card){
		    data.card = req.body.card
	    }
	    if(req.body.phoneNumber){
		    data.phoneNumber = req.body.phoneNumber
	    }
	    if(req.body.birthday){
		    data.birthday = req.body.birthday
		}
		if(req.body.address){
		    data.address = req.body.address
		}
		if(req.body.userName){
		    data.userName = req.body.userName
		}
		if(req.body.level){
		    data.level = req.body.level
		}
		if(req.body.experience){
		    data.experience = req.body.experience
		}
		if(req.body.departmentId){
		    data.departmentId = req.body.departmentId
		}
		if(req.body.dean){
		    data.dean = req.body.dean
		}
	    if (req.file){
            // cắt 'puclic' đi
            data.image= req.file.path.substr(6,req.file.path.length);
		}
	    User.updates(data, (err, user) => {
		    if (err|| !user){
			    res.render('pages/errorTemplate',
					{message: 'Lỗi server!', codeError: 500});
		     } else{
				// do finds nen user o day la 1 array
                User.finds(user._id, objectType, typeFind, (err, user) => {
                res.render('pages/listUsers', {users: user, objectType: objectType});
                });
                }
            });
        })
	.delete(function(req, res, next){
		var data = req.body._id;
		User.deletes(data, (err, user) => {
			if (err || !user){
				res.render('pages/errorTemplate',
					{message: 'Lỗi server!', codeError: 500});
			} else{
				res.render('pages/listUsers', {users: [user], objectType: objectType});
			}
		});
	})

module.exports = router;