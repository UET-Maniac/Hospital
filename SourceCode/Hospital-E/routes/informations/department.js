var express = require('express');
var router = express.Router();
var Department = require("../../models/department");
var config = require('../../config.json');
var objectType = config.viewer;
var upload = require('../../middlewares/uploadImage');

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
        Department.finds('', objectType, (err, departments) => {
            if (err || !departments.length){
                res.render('pages/error',
			        { objectType: objectType, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
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
                res.render('pages/errorTemplate',
			        {message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
            } else{
                res.render('pages/listDepartments', {departments: departments, objectType: objectType});
            }
        });
    })
    .post(checkAdmin, upload.single('image'), function(req, res, next){
        var data = {
            name: req.body.name,
            description: req.body.description,
            address: req.body.address,
            foundingOn: req.body.foundingOn
        }
        if (req.file){
            // cắt 'puclic' đi
            data.image= req.file.path.substr(6,req.file.path.length);
        }
        Department.inserts(data, (err, department) => {
            if (err || !department){
                res.render('pages/errorTemplate',
					{message: 'Dữ liệu đã tồn tại!', codeError: 409});
            } else{
                // trả lại department mới được tạo
                res.render('pages/listDepartments', {departments: [department], objectType: objectType});
            }
        });
    })
    .patch(checkAdmin, upload.single('image'), function(req, res, next){
        var data = {
            _id: req.body._id,
            name: req.body.name,
            description: req.body.description,
            address: req.body.address,
            active: req.body.active
        }
        if(req.body.foundingOn){
            data.foundingOn= req.body.foundingOn;
        }
        if (req.file){
            // cắt 'puclic' đi
            data.image= req.file.path.substr(6,req.file.path.length);
        }
        Department.updates(data, (err, department) => {
            if (err || !department){
                res.render('pages/errorTemplate',
                    {message: 'Lỗi server!', codeError: 500});
            } else{
                Department.findById(department._id, (err, department) => {
                    res.render('pages/listDepartments', {departments: [department], objectType: objectType});
                });
            }
        });
    })
    .delete(checkAdmin, function(req, res, next){
        var data = req.body._id;
        Department.deletes(data, (err, department) => {
            if (err || !department){
                res.render('pages/errorTemplate',
                    {message: 'Lỗi server!', codeError: 500});
            } else{
                res.render('pages/listDepartments', {departments: [department], objectType: objectType});
            }
        });
    })

module.exports = router;