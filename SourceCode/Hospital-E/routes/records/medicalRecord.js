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

router.use(function(req, res, next){
	if(objectType != config.user && objectType != config.admin && objectType != config.doctor){
        res.redirect('/dang-nhap');
    } 
    next();  
})

router.route('/')
    .get(function(req, res, next){
        var idObjectType = req.auth.data._id;
        MedicalRecord.finds('', config.user, idObjectType, (err, medicalRecords)=>{
            if(err || !medicalRecords.length){
                res.render('pages/error',
			        { objectType: objectType, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
            } else{
                res.render('pages/recordMedical', 
                    {medicalRecords: medicalRecords, objectType: objectType});
            }
        })
    })
    .put(function(req, res, next){
        var data = '';
        if (req.body.data) data = req.body.data;
        var idObjectType = req.auth.data._id;
        MedicalRecord.finds(data, config.user, idObjectType, (err, medicalRecords)=>{
            if(err || !medicalRecords.length){
                res.render('pages/errorTemplate',
			        {message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
            } else{
                res.render('pages/listRecordMedilcal', 
                    {medicalRecords: medicalRecords, objectType: objectType});
            }
        })
    })

module.exports = router;