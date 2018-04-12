var express = require('express');
var router = express.Router();
var Department = require("../../models/department.model");

router.route('/')
    .get(function(req, res, next){
        var data = '';
        if (req.body.data) data = req.body.data;
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
        Department.insertOrUpdate(req.body.data, (err, departments) => {
            if (err){
                res.status('409').json({
                    message: "Data is exit!"
                })
            } else{
                // render to information
            }
        });
    })
    .patch(function(req, res, next){
        Department.insertOrUpdate(req.body.data, (err, departments) => {
            if (err){
                res.status('500').json({
                    message: "Error with server!"
                })
            } else{
                // render to information
            }
        });
    })
    .delete(function(req, res, next){
        Department.deletes(req.body.data, (err, departments) => {
            if (err){
                res.status('500').json({
                    message: "Error with server!"
                })
            } else{
                // render to information
            }
        });
    })
// router('/update')

module.exports = router;