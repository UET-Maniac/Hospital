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

function checkUser(req, res, next){
	if(objectType != config.admin && objectType != config.doctor){
        return  res.render('pages/error',
			{ objectType: config.viewer, message: 'Không có quyền truy cập!', codeError: 401});
    } 
    next();  
}

router.route('/')
    .get(function(req, res, next){
        var idObjectType = req.auth.data._id;
        Appointment.finds('', objectType, idObjectType, (err, appointments)=>{
            if(err || !appointments.length){
                res.render('pages/error',
			        { objectType: config.viewer, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
            } else{
                res.render('pages/appointmentScheduleHistory', 
                    {appointments: appointments, objectType: objectType});
            }
        })
    })
    .put(checkUser, function(req, res, next){
        var data = '';
        if (req.body.data) data = req.body.data;
        var idObjectType = req.auth.data._id;
        Appointment.finds(data, objectType, idObjectType, (err, appointments)=>{
            if(err || !appointments.length){
                res.render('pages/error',
			        { objectType: config.viewer, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
            } else{
                res.render('pages/listHistories', 
                    {appointments: appointments, objectType: objectType});
            }
        })
    })
    .post(function(req, res, next){
        if(objectType == config.admin){
            var data = {

            }
            Appointment.inserts(req.body.data, (err, appointment) => {
                if (err){
                    res.render('pages/errorTemplate',
					    {message: 'Dữ liệu đã tồn tại!', codeError: 409});
                } else{
                    res.render('pages/listHistories', {appointments: [appointment], objectType: objectType});
                }
            });
        } else{
            return  res.render('pages/errorTemplate',
			    {message: 'Không có quyền truy cập!', codeError: 401});
        }
    })
    .patch(function(req, res, next){
        if (objectType == config.admin){
            var data = {

            }
            Appointment.updates(data, (err, appointment) => {
                if (err){
                    res.render('pages/errorTemplate',
					    {message: 'Lỗi server!', codeError: 500});
                } else{
                    Appointment.finds('', (err, appointment)=>{
                        res.render('pages/listHistories', 
                            {appointments: appointment, objectType: objectType});
                    })
                }
            });
        } else if(objectType == config.doctor){
            var data = {
                _id: req.body.id,
                acceptance: true
            }
            Appointment.updates(data, (err, appointment) => {
                if (err){
                    res.render('pages/errorTemplate',
					    {message: 'Lỗi server!', codeError: 500});
                } else{
                    Appointment.finds('', (err, appointment)=>{
                        res.render('pages/listHistories', 
                            {appointments: appointment, objectType: objectType});
                    })
                }
            });
        }
    })
    .delete(function(req, res, next){
        if (objectType == config.admin){
            var data = req.body._id;
            Appointment.deletes(data, (err, appointment) => {
                if (err || !appointment){
                    res.render('pages/errorTemplate',
                        {message: 'Lỗi server!', codeError: 500});
                } else{
                    res.render('pages/listHistories', {appointments: [appointment], objectType: objectType});
                }
            });
        } else{
            return  res.render('pages/errorTemplate',
			    {message: 'Không có quyền truy cập!', codeError: 401});
        }
    })

module.exports = router;