var express = require('express');
var router = express.Router();
var MedicalRecord = require('../../models/medicalRecord');
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

router.use(function (req, res, next){
	if(objectType != config.admin && objectType != config.doctor){
        return  res.render('pages/error',
			{ objectType: objectType, message: 'Không có quyền truy cập!', codeError: 401});
    } 
    next();  
})

router.route('/')
    .get(function(req, res, next){
        var idObjectType = req.auth.data._id;
        MedicalRecord.finds('', objectType, idObjectType, (err, medicalRecords)=>{
            if(err || !medicalRecords.length){
                res.render('pages/error',
			        { objectType: objectType, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
            } else{
                res.render('pages/recordPatient', 
                    {medicalRecords: medicalRecords, objectType: objectType});
            }
        })
    })
    .put(function(req, res, next){
        var data = '';
        if (req.body.data) data = req.body.data;
        var idObjectType = req.auth.data._id;
        MedicalRecord.finds(data, objectType, idObjectType, (err, medicalRecords)=>{
            if(err || !medicalRecords.length){
                res.render('pages/errorTemplate',
			        {message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
            } else{
                res.render('pages/listPatients', 
                    {medicalRecords: medicalRecords, objectType: objectType});
            }
        })
    })
    .post(function(req, res, next){
        if(objectType == config.doctor){
            var idObjectType = req.auth.data._id;
            var data = {
                doctorId: idObjectType,
                patientId: req.body.patientId,
                theDiagnosis: req.body.theDiagnosis,
                status: req.body.status,
                treatment: req.body.treatment,
                medicines: req.body.medicines
            }
            if (req.body.bedNo){
                data.bedNo = req.body.bedNo;
            }
            if (req.body.timeStart){
                data.timeStart = req.body.timeStart;
            }
            if (req.body.timeEnd){
                data.timeEnd = req.body.timeEnd;
            }
            MedicalRecord.inserts(data, (err, medicalRecord) => {
                if (err || !MedicalRecord){
                    res.render('pages/errorTemplate',
					    {message: 'Dữ liệu đã tồn tại!', codeError: 409});
                } else{
                    MedicalRecord.finds(medicalRecord._id, objectType, idObjectType, (err, medicalRecord)=>{
                        res.render('pages/listPatients', 
                            {medicalRecords: medicalRecord, objectType: objectType});
                    })
                }
            });
        } else{
            return  res.render('pages/errorTemplate',
			    {message: 'Không có quyền truy cập!', codeError: 401});
        }
    })
    .patch(function(req, res, next){
        var idObjectType = req.auth.data._id;
        var data = {
            _id: req.body._id,
            doctorId: req.body.doctorId,
            patientId: req.body.patientId,
            theDiagnosis: req.body.theDiagnosis,
            status: req.body.status,
            treatment: req.body.treatment,
            medicines: req.body.medicines,
            active: req.body.active
        }
        if (req.body.bedNo){
            data.bedNo = req.body.bedNo;
        }
        if (req.body.timeStart){
            data.timeStart = req.body.timeStart;
        }
        if (req.body.timeEnd){
            data.timeEnd = req.body.timeEnd;
        }
        MedicalRecord.updates(data, (err, medicalRecord) => {
            if (err || !medicalRecord){
                res.render('pages/errorTemplate',
                    {message: 'Lỗi server!', codeError: 500});
            } else{
                MedicalRecord.finds(medicalRecord._id, objectType, idObjectType, (err, medicalRecord)=>{
                    res.render('pages/listPatients', 
                        {medicalRecords: medicalRecord, objectType: objectType});
                })
            }
        });
    })
    .delete(function(req, res, next){
        var data = req.body._id;
        var idObjectType = req.auth.data._id;
        MedicalRecord.deletes(data, (err, medicalRecord) => {
            if (err || !medicalRecord){
                res.render('pages/errorTemplate',
                    {message: 'Lỗi server!', codeError: 500});
            } else{
                MedicalRecord.finds(medicalRecord._id, objectType, idObjectType, (err, medicalRecord)=>{
                    res.render('pages/listPatients', 
                        {medicalRecords: medicalRecord, objectType: objectType});
                })
            }
        });
    })

module.exports = router;