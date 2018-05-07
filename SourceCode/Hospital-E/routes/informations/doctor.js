var express = require('express');
var router = express.Router();
var Doctor = require("../../models/user");
var config = require('../../config.json');
var objectType = config.viewer;
var typeFind = config.findDoctor;

var upload = require('../../middlewares/uploadImage');

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

function checkAdmin(req, res, next){
	if(objectType != config.admin){
        return res.render('pages/error',
			{ objectType: objectType, message: 'Không có quyền truy cập!', codeError: 401});
    }
    return next();  
}

router.route('/')
  	.get(function(req, res, next){
		Doctor.finds('', objectType, typeFind, (err, doctors) => {
			// can them dieu kiem kiem tra xem co kq hay khong de  bat truong hop ko loi va ko co kq
			if (err || !doctors.length){
				res.render('pages/error',
			        { objectType: objectType, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
			} else{
				res.render('pages/informationDoctor', {doctors: doctors, objectType: objectType});
			}
		});
  	})
  	.put(function(req, res, next){
		var data = '';
		if (req.body.data) data = req.body.data;
		Doctor.finds(data, objectType, typeFind, (err, doctors) => {
	  		if (err || !doctors.length){
				res.render('pages/errorTemplate',
			        { message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
	  		} else{
				res.render('pages/listDoctor', {doctors: doctors, objectType: objectType});
	  		}
		});
  	})
  	.post(checkAdmin,upload.single('image'), function(req, res, next){
		var data = {
            name: req.body.name,
            card: req.body.card,
			phoneNumber: req.body.phoneNumber,
			birthday: req.body.birthday,
			sex: req.body.sex,
			address: req.body.address,
			userName: req.body.userName,
			password: req.body.password,
			objectType: config.doctor,
			level: req.body.level,
			experience: req.body.experience,
			departmentId: req.body.departmentId,
			dean: req.body.dean
		}
        if (req.file){
            // cắt 'puclic' đi
            data.image= req.file.path.substr(6,req.file.path.length);
        }
		Doctor.inserts(data, (err, doctor) => {
		    if (err){
		        res.render('pages/errorTemplate',
					{message: 'Dữ liệu đã tồn tại!', codeError: 409});
		    } else{
		        Doctor.finds(doctor._id, objectType, typeFind, (err, doctor) => {
					res.render('pages/listDoctor', {doctors: doctor, objectType: objectType});
			  	});
		    }
		});
 	 })
	.patch(checkAdmin, upload.single('image'), function(req, res, next){
		var data = {
			_id: req.body._id,
            name: req.body.name,
            card: req.body.card,
            phoneNumber: req.body.phoneNumber,
			sex: req.body.sex,
			address: req.body.address,
			level: req.body.level,
			experience: req.body.experience,
			departmentId: req.body.departmentId,
			dean: req.body.dean,
			active: req.body.active
		}
		if (req.body.birthday){
			data.birthday = req.body.birthday;
		}
		if (req.body.userName){
			data.userName = req.body.userName;
		}
        if (req.file){
            // cắt 'puclic' đi
            data.image= req.file.path.substr(6,req.file.path.length);
		}
		Doctor.updates(data, (err, doctor) => {
			if (err || !doctor){
				res.render('pages/errorTemplate',
                    {message: 'Lỗi server!', codeError: 500});
			} else{
				Doctor.finds(doctor._id, objectType, typeFind, (err, doctor) => {
					res.render('pages/listDoctor', {doctors: doctor, objectType: objectType});
			  	});
			}
		});
	})
	.delete(checkAdmin, function(req, res, next){
		var data = req.body._id;
		Doctor.deletes(data, (err, doctor) => {
			if (err || !doctor){
				res.render('pages/errorTemplate',
                    {message: 'Lỗi server!', codeError: 500});
			} else{
				Doctor.finds(doctor._id, objectType, typeFind, (err, doctor) => {
					res.render('pages/listDoctor', {doctors: doctor, objectType: objectType});
			  	});
			}
		});
	})

module.exports = router;