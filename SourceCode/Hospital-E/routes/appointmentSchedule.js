var express = require('express');
var router = express.Router();
var Appointment = require('../models/appointmentSchedule.model');
var Department = require("../models/department.model");
var Doctor = require("../models/user.model");
var config = require('../config.json');
var objectType = config.viewer;
var typeFind = config.findDoctor;

router.use(function(req, res, next){
	if(typeof req.objectType !== 'undefined'){
        objectType = req.objectType;  
    } else{
        objectType = config.viewer;
    }
    next();  
})

function checkUser(req, res, next){
	if(objectType != config.user && objectType != config.admin && objectType != config.doctor){
        return res.redirect('/dang-nhap');
    } 
    next();  
}

router.route('/')
    .get(function(req, res, next){
        Department.findIncludeWithDoctor('', objectType, (err, departments)=>{
            res.render('pages/appointmentSchedule', 
                {departments: departments, objectType: objectType});
        })
    })
    .post(checkUser, function(req, res, next){
        var data = {
            doctorId: req.body.doctorId,
            patientId: req.auth.data._id,
            time: req.body.time,
            address: req.body.address,
            description: req.body.description,
            acceptance: false
        }
        Appointment.inserts(data, (err, appointment) => {
            if (err){
                res.render('pages/error500',
                    { objectType: config.viewer , message: 'Xảy ra lỗi với server!'});
            } else{
                // can check objectType va render theo view rieng
                // response gui lai 1 dau hieu de client gui tin nhan tao thanh cong
                res.redirect('/');
                res.render('pages/index', {objectType: objectType});
            }
        });
    })
    // .post(function(req, res, next){
    //     if(objectType){
    //         Department.inserts(req.body.data, (err, departments) => {
    //             if (err){
    //                 res.status('409').json({
    //                     message: "Data exited!"
    //                 })
    //             } else{
    //                 // render to information
    //                 res.send("thanhcong");
    //             }
    //         });
    //     } else{
    //         res.status('404').json({
    //             message: "Not found!"
    //         })
    //     }
    // })
    // .patch(function(req, res, next){
    //     if (objectType){
    //         Department.updates(req.body.data, (err, departments) => {
    //             if (err){
    //                 res.status('500').json({
    //                     message: "Error with server!"
    //                 })
    //             } else{
    //                 // render to information
    //                 res.send("thanhcong");
    //             }
    //         });
    //     } else{
    //         res.status('404').json({
    //             message: "Not found!"
    //         })
    //     }
    // })
    // .delete(function(req, res, next){
    //     if (objectType){
    //         Department.deletes(req.body.data._id, (err, departments) => {
    //             if (err){
    //                 res.status('500').json({
    //                     message: "Error with server!"
    //                 })
    //             } else{
    //                 // render to information
    //                 res.send("thanhcong");
    //             }
    //         });
    //     } else{
    //         res.status('404').json({
    //             message: "Not found!"
    //         })
    //     }
    // })

module.exports = router;