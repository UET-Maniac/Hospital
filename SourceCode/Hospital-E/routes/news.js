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
            User.findOne({token: req.cookies.token}, (err, user) => {
                if(err)
                    return handleError(err);
                var own = false;
                console.log(user._id);
                console.log(data[0].authorId);
                if(user._id == data[0].authorId || objectType == 0){
                    own = true;
                }
                console.log(own);
                res.render('pages/content_news', {one_new: data[0], own: own, objectType: objectType});
            });            
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
        
        fs.readFile(oldPath, 'utf8', (err, data) => {

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
                    data_save.like = 0;
                    data_save.active = true;
                    data_save.timestamp = new Date()
                    
                    Post.create(data_save, function (err, small) {
                        if (err) {
                            res.render('pages/error', { objectType: objectType , message: 'Xảy ra lỗi với server!', codeError: 500});
                        }else{
                            res.render('pages/fileUploadSuccess', {objectType: objectType });
                        }
                    });
                }
            });
        });

    });
});

router.get("/chinh-sua", (req, res, next) => {
    Post.findOne({_id: req.query.id}, (err, o_post) => {
        console.log(o_post);
        res.render("pages/edit_new", {one_new: o_post, objectType: objectType});
    });
});

router.post("/updateNews", (req, res, next) => {
    console.log("upload File");
    var form = new formidable.IncomingForm();
    
    form.parse(req, function(err, fields, files) {
        var oldPath = files.fileUpload.path;

        fs.readFile(oldPath, 'utf8', (err, data) => {

            //Save data in here
            var data_save = {
                content: data,
                title: fields.title
            }
            Post.findOne({_id: fields.id}, (err, o_post) => {
                if(err)
                    return handleError(err);
                o_post.set(data_save);
                o_post.save((err, updated_post) => {
                    if(err)
                        return handleError(err);
                    
                    res.render("pages/update_new_success", {objectType: objectType});
                })
            });
        });
    });
});

router.get("/xoa-bai", (req, res, next) => {
    Post.remove({_id: req.query.id}, function (err) {
        if (err) return handleError(err);
        res.render('pages/delete_new_success', {objectType: objectType});
      });
});

router.get("/incrementVote", (req, res, next) => {
    Post.findOne({_id: req.query.idPost}, (err, o_post) => {
        if(err)
            return handleError(err);
        if(o_post.like == undefined)
            o_post.like = 0;
        var vote = o_post.like + 1;
        o_post.set({like: vote});
        o_post.save((err, update_post) => {
            if(err)
                return handleError(err);
                var data = {
                    like: update_post.like
                }
                res.render("pages/change_vote", {data: data});
        });
    });
})

router.get("/descrementVote", (req, res, next) => {
    Post.findOne({_id: req.query.idPost}, (err, o_post) => {
        if(err)
            return handleError(err);
        if(o_post.like == undefined)
            o_post.like = 0;
        var vote = o_post.like - 1;
        o_post.set({like: vote});
        o_post.save((err, update_post) => {
            if(err)
                return handleError(err);
                var data = {
                    like: update_post.like
                }
                res.render("pages/change_vote", {data: data});
        });
    });
})
module.exports = router;
