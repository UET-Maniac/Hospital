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
			{ objectType: config.viewer, message: 'Không có quyền truy cập!', codeError: 401});
    }
    return next();  
}

router.route('/')
  	.get(function(req, res, next){
		Doctor.finds('', objectType, typeFind, (err, doctors) => {
			// can them dieu kiem kiem tra xem co kq hay khong de  bat truong hop ko loi va ko co kq
			if (err || !doctors.length){
				res.render('pages/error',
			        { objectType: config.viewer, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
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
				res.render('pages/error',
			        { objectType: config.viewer, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
	  		} else{
				res.render('pages/informationDoctor', {doctors: doctors, objectType: objectType});
	  		}
		});
  	})
  	.post(upload.single('image'), function(req, res, next){
		// chưa kiểm tra điều kiện là admin 
		// console.log(req.body._id);
		// console.log(req.file);
		res.send("thanhcong");
		// Doctor.inserts(req.body.data, (err, doctors) => {
		//     if (err){
		//         res.render('pages/error',
					// { objectType: config.viewer, message: 'Dữ liệu đã tồn tại!', codeError: 409});
		//     } else{
		//         // render to information
		//         res.send("thanhcong");
		//     }
		// });
 	 })
	.patch(checkAdmin, function(req, res, next){
		Doctor.updates(req.body.data, (err, doctor) => {
			if (err || !doctor){
				res.render('pages/error',
                    { objectType: config.viewer, message: 'Lỗi server!', codeError: 500});
			} else{
				// render to information
				res.send("thanhcong");
			}
		});
	})
	.delete(checkAdmin, function(req, res, next){
		Doctor.deletes(req.body.data._id, (err, doctor) => {
			if (err || !doctor){
				res.render('pages/error',
                    { objectType: config.viewer, message: 'Lỗi server!', codeError: 500});
			} else{
				// render to information
				res.send("thanhcong");
			}
		});
	})

module.exports = router;