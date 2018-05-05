var express = require('express');
var router = express.Router();
var config = require('../config.json');
var objectType = config.viewer;
var News = require("../models/news");

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
    News.find({}, (err, news_data) => {
        console.log(news_data);
        if(err || !news_data.length){
            res.render('pages/error',
			        { objectType: config.viewer, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
        }else{
            res.render('pages/news', {news: news_data, objectType: objectType});
        }
    });
});

module.exports = router;
