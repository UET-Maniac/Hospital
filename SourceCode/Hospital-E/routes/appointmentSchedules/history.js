var express = require('express');
var router = express.Router();
var Appointment = require('../../models/appointmentSchedule');
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

router.use(function(req, res, next){
	if(objectType != config.user && objectType != config.admin && objectType != config.doctor){
        res.redirect('/dang-nhap');
    } 
    next();  
})

router.route('/')
    .get(function(req, res, next){
        var idObjectType = req.auth.data._id;
        Appointment.finds('', config.user, idObjectType, (err, appointments)=>{
            if(err || !appointments.length){
                res.render('pages/error',
			        { objectType: objectType, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
            } else{
                res.render('pages/appointmentScheduleHistory', 
                    {appointments: appointments, objectType: objectType});
            }
        })
    })
    .put(function(req, res, next){
        var data = '';
        if (req.body.data) data = req.body.data;
        var idObjectType = req.auth.data._id;
        Appointment.finds(data, config.user, idObjectType, (err, appointments)=>{
            if(err || !appointments.length){
                res.render('pages/errorTemplate',
			        {message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
            } else{
                res.render('pages/listHistories', 
                    {appointments: appointments, objectType: objectType});
            }
        })
    })
    .delete(function(req, res, next){
        var data = req.body._id;
        var idObjectType = req.auth.data._id;
	    Appointment.deletes(data, (err, appointment) => {
	        if (err || !appointment){
	            res.render('pages/errorTemplate',
					{message: 'Lỗi server!', codeError: 500});
	        } else{
                Appointment.finds(appointment._id, config.admin, idObjectType, (err, appointments)=>{
                    res.render('pages/listHistories', 
                        {appointments: appointments, objectType: objectType});
                })
	        }
	    });
    })

module.exports = router;