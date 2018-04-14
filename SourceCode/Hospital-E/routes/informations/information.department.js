var express = require('express');
var router = express.Router();
var Department = require("../../models/department.model");

router.route('/')
    .get(function(req, res, next){
        Department.finds('', 0, (err, departments) => {
            if (err){
                res.status('404').json({
                    message: "Can't find data suitable with this request!"
                })
            } else{
                res.render('pages/informationDepartment', {departments: departments});
            }
        });
    })
    .put(function(req, res, next){
        var data = '';
        if (req.body.data) data = req.body.data;
        console.log(data);
        Department.finds(data, 0, (err, departments) => {
            if (err){
                res.status('404').json({
                    message: "Can't find data suitable with this request!"
                })
            } else{
                res.render('pages/informationDepartment', {departments: departments});
            }
        });
    })
    .post(function(req, res, next){
        // chưa kiểm tra điều kiện là admin 
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
    })
    .patch(function(req, res, next){
        // chưa kiểm tra điều kiện là admin 
        Department.updates(req.body.data, (err, departments) => {
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
    .delete(function(req, res, next){
        // chưa kiểm tra điều kiện là admin 
        Department.deletes(req.body.data, (err, departments) => {
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