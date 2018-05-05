var express = require('express');
var router = express.Router();
var config = require('../config.json');
var objectType = config.viewer;
var Post = require("../models/post");

router.use(function(req, res, next){
    // console.log(req.objectType)
	if(typeof req.objectType !== 'undefined'){
        objectType = req.objectType;  
    } else{
        objectType = config.viewer;
    }
    next();
})

/* GET page News */
router.get('/', function(req, res, next) {
    Post.find({}, (err, news_data) => {
        if(err || !news_data.length){
            res.render('pages/error',
			        { objectType: config.viewer, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
        }else{
            news_data_slice = news_data.slice(0, 5);
            res.render('pages/news', {news: news_data_slice, objectType: objectType});
        }
    });

});

router.get('/readmore', function(req, res, next) {
    var number = parseInt(req.query.page);
    
    Post.find({}, (err, news_data) => {
        if(err){
            res.render('pages/error',
			        { objectType: config.viewer, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
        }else{
            news_data_slice = news_data.slice(number*5, number * 5 + 5);
            res.render('pages/readmore', {news: news_data_slice, objectType: objectType});
        }
    });

});

router.get('/chitiet', (req, res, next) => {
    console.log(req.query.id);

    Post.find({_id: req.query.id}, (err, data) => {
        if(err){
            res.render('pages/error',
			        { objectType: config.viewer, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
        }else{
            console.log(data);
            res.render('pages/content_news', {one_new: data, objectType: objectType});
        }
    });
});

// router.get('/', (req, res, next) => {
//     Post.find({_id: req.param._id}, (err, a_news) => {
//         if(err){
//             res.render('pages/error', { objectType: config.viewer, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
//         }else{
//             res.send("Heello");
//         }
//     });
// });

module.exports = router;
