var express = require('express');
var router = express.Router();
var config = require('../config.json');
var objectType = config.viewer;
var Post = require("../models/post");
var formidable = require('formidable');
var fs = require("fs");
var User = require("../models/user");

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
    //find({postType: 1})
    Post.find({postType: 0}, (err, news_data) => {
        if(err){
            res.render('pages/error',
			        { objectType: config.viewer, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
        }else{
            news_data.reverse();
            news_data_slice = news_data.slice(0, 5);
            console.log(objectType);
            res.render('pages/news', {news: news_data_slice, objectType: objectType});
        }
    });

});

router.get('/readmore', function(req, res, next) {
    var number = parseInt(req.query.page);

    Post.find({postType: 0}, (err, news_data) => {
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
    Post.find({_id: req.query.id}, (err, data) => {
        if(err){
            res.render('pages/error',
			        { objectType: config.viewer, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
        }else{
            res.render('pages/content_news', {one_new: data[0], objectType: objectType});
        }
    });
});

router.get('/tao-bai', (req, res, next) => {
    res.render('pages/create_news', {objectType: objectType});
});

router.post('/upload', (req, res, next) => {
    console.log("upload File");
    var form = new formidable.IncomingForm();
    
    form.parse(req, function(err, fields, files) {
        var oldPath = files.fileUpload.path;
        //var newPath = __dirname + '/../files/' + files.fileUpload.name;

        
        fs.readFile(oldPath, 'utf8', (err, data) => {
            //Processing data in here

            //Save data in here
            var data_save = {
                content: data,
                title: fields.title
            }
            User.findOne({token: req.cookies.token}, (err, user)=>{
                if(err){
                    console.log(error);
                }else{
                    data_save._id = "POS" + Number(new Date());
                    data_save.authorId = user._id;
                    data_save.postType = 0;
                    data_save.active = true;
                    data_save.timestamp = new Date()
                    
                    //console.log(data_save);

                    // Post.inserts(data, (err, post_news)=>{
                    //     if(err){
                    //         res.render('pages/error', { objectType: objectType , message: 'Xảy ra lỗi với server!', codeError: 500});
                    //     }else{
                    //         res.render('pages/fileUploadSuccess', { data: data, objectType: objectType });
                    //     }
                    // });
                    Post.create(data_save, function (err, small) {
                        if (err) {
                            console.log(err);
                            //res.render('pages/error', { objectType: objectType , message: 'Xảy ra lỗi với server!', codeError: 500});
                        }else{
                            res.render('pages/fileUploadSuccess', {objectType: objectType });
                        }
                    });
                }
            })

            // fs.writeFile(newPath, data, (err) => {
            //     console.log("Saved!");
            // })
            
        });

    });
});


module.exports = router;
