var express = require('express');
var router = express.Router();
var Department = require("../../models/department.model");
var config = require('../../config.json');
var objectType = config.viewer;

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
        Department.finds('', objectType, (err, departments) => {
            if (err || !departments.length){
                res.render('pages/error',
			        { objectType: config.viewer, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
            } else{
                res.render('pages/informationDepartment', {departments: departments, objectType: objectType});
            }
        });
    })
    .put(function(req, res, next){
        var data = '';
        if (req.body.data) data = req.body.data;
        Department.finds(data, objectType, (err, departments) => {
            if (err || !departments.length){
                res.render('pages/error',
			        { objectType: config.viewer, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
            } else{
                res.render('pages/informationDepartment', {departments: departments, objectType: objectType});
            }
        });
    })
    .post(checkAdmin, function(req, res, next){
        Department.inserts(req.body.data, (err, department) => {
            if (err){
                res.render('pages/error',
					{ objectType: config.viewer, message: 'Dữ liệu đã tồn tại!', codeError: 409});
            } else{
                // render to information
                res.send("thanhcong");
            }
        });
    })
    .patch(checkAdmin, function(req, res, next){
        Department.updates(req.body.data, (err, department) => {
            if (err || !department){
                res.render('pages/error',
                    { objectType: config.viewer, message: 'Lỗi server!', codeError: 500});
            } else{
                // render to information
                res.send("thanhcong");
            }
        });
    })
    .delete(checkAdmin, function(req, res, next){
        Department.deletes(req.body.data._id, (err, department) => {
            if (err || !department){
                res.render('pages/error',
                    { objectType: config.viewer, message: 'Lỗi server!', codeError: 500});
            } else{
                // render to information
                res.send("thanhcong");
            }
        });
    })

module.exports = router;