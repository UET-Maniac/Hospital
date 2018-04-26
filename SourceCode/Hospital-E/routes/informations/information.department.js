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
        return res.render('pages/error401',
            { objectType: config.viewer, message: 'Không có quyền truy cập!'});
    }
    return next();  
}

router.route('/')
    .get(function(req, res, next){
        Department.finds('', objectType, (err, departments) => {
            if (err){
                res.render('pages/error404',
			        { objectType: config.viewer, message: 'Không tìm thấy dữ liệu phù hợp!'});
            } else{
                res.render('pages/informationDepartment', {departments: departments, objectType: objectType});
            }
        });
    })
    .put(function(req, res, next){
        var data = '';
        if (req.body.data) data = req.body.data;
        Department.finds(data, objectType, (err, departments) => {
            if (err){
                res.render('pages/error404',
			        { objectType: config.viewer, message: 'Không tìm thấy dữ liệu phù hợp!'});
            } else{
                res.render('pages/informationDepartment', {departments: departments, objectType: objectType});
            }
        });
    })
    .post(checkAdmin, function(req, res, next){
        // if(objectType){
            Department.inserts(req.body.data, (err, departments) => {
                if (err){
                    res.status('409').json({
                        message: "Data exited!"
                    })
                } else{
                    // render to information
                    res.send("thanhcong");
                }
            });
        // } else{
        //     res.render('pages/error404',
        //         { objectType: config.viewer, message: 'Không tìm thấy dữ liệu phù hợp!'});
        // }
    })
    .patch(checkAdmin, function(req, res, next){
        Department.updates(req.body.data, (err, departments) => {
            if (err){
                res.render('pages/error500',
                    { objectType: config.viewer, message: 'Lỗi server!'});
            } else{
                // render to information
                res.send("thanhcong");
            }
        });
    })
    .delete(checkAdmin, function(req, res, next){
        Department.deletes(req.body.data._id, (err, departments) => {
            if (err){
                res.status('500').json({
                    message: "Error with server!"
                })
            } else{
                // render to information
                res.send("thanhcong");
            }
        });
    })

module.exports = router;