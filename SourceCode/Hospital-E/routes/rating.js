var express = require('express');
var router = express.Router();
var Rating = require('../models/rating');
var config = require('../config.json');
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

router.route('/:doctorId')
    .get(function(req, res) {
        if (!req.params.doctorId) return res.redirect('/gioi-thieu/bac-si');
        var data = {
            doctorId: req.params.doctorId
        }
        Rating.finds(data, (err, ratings)=>{
            if(err || !ratings.length){
                res.render('pages/error',
                    { objectType: objectType, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
            } else{
                res.render('pages/rating', 
                    {ratings: ratings, objectType: objectType, doctorId:ratings[0].doctorId});
            }
        })
    })
router.route('/')
    .post(function(req, res) {
        var data = {
            doctorId: req.body.doctorId,
            patientId: req.auth.data._id,
            content: req.body.content,
            star: req.body.star
        }
        Rating.inserts(data, (err, rating)=>{
            if(err || !rating){
                res.render('pages/error',
                    { objectType: objectType, message: 'Lỗi server!', codeError: 500});
            } else{
                var url = '/danh-gia/' + rating.doctorId;
                res.redirect(url);
            }
        })
    })

module.exports = router;