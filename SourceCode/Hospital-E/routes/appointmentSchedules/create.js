var express = require('express');
var router = express.Router();
var Appointment = require('../../models/appointmentSchedule');
var Department = require("../../models/department");
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
	if(objectType != config.user && objectType != config.admin && objectType != config.doctor){
        res.redirect('/dang-nhap');
    } 
    next();  
}

router.route('/')
    .get(function(req, res, next){
        Department.findIncludeWithDoctor('', (err, departments)=>{
            if(err || !departments.length){
                res.render('pages/error',
			        { objectType: objectType, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
            } else{
                res.render('pages/appointmentScheduleCreate', 
                    {departments: departments, objectType: objectType});
            }
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
                res.render('pages/error',
                    { objectType: objectType , message: 'Xảy ra lỗi với server!', codeError: 500});
            } else{
                res.redirect('/dat-lich-hen/lich-su');
            }
        });
    })

module.exports = router;