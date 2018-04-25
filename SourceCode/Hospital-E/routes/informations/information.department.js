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
        return res.json('Không có quyền')
    }
    return next();  
}

router.route('/')
    .get(function(req, res, next){
        Department.finds('', objectType, (err, departments) => {
            if (err){
                res.status('404').json({
                    message: "Can't find data suitable with this request!"
                })
            } else{
                // can check objectType va render theo view rieng
                if (!objectType){
                    res.render('pages/informationDepartment', {departments: departments, objectType: objectType});
                }
                else {
                    res.render('pages/informationDepartment', {departments: departments, objectType: objectType});
                }
            }
        });
    })
    .put(function(req, res, next){
        var data = '';
        if (req.body.data) data = req.body.data;
        Department.finds(data, objectType, (err, departments) => {
            if (err){
                res.status('404').json({
                    message: "Can't find data suitable with this request!"
                })
            } else{
                // can check objectType va render theo view rieng
                res.render('pages/informationDepartment', {departments: departments, objectType: objectType});
            }
        });
    })
    .post(checkAdmin, function(req, res, next){
        if(objectType){
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
        } else{
            res.status('404').json({
                message: "Not found!"
            })
        }
    })
    .patch(checkAdmin, function(req, res, next){
        if (objectType){
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
        } else{
            res.status('404').json({
                message: "Not found!"
            })
        }
    })
    .delete(checkAdmin, function(req, res, next){
        if (objectType){
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
        } else{
            res.status('404').json({
                message: "Not found!"
            })
        }
    })

module.exports = router;