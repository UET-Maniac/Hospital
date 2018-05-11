var express = require('express');
var router = express.Router();
var config = require('../config.json');
var mongoose = require('mongoose');
var objectType = config.viewer;
var Post = require("../models/post");
var User = require("../models/user");

router.use(function(req, res, next){
	if(typeof req.objectType !== 'undefined'){
        objectType = req.objectType;  
    } else{
        objectType = config.viewer;
    }
    next();  
})

/* GET main forum. */
router.get('/', function(req, res, next) {
    Post.find({postType: 1})
        .populate('authorId')
        .exec(function(err, data){
            if(err)
                return handleError(err);
            console.log(data);
            data.reverse();
            data = data.slice(0, 20);
            res.render('pages/forum', {posts: data, objectType: objectType});
        });
});

// router.get('/', function(req, res, next) {
//     Post.find({postType: 1}, (err, post_data) => {
//         if(err){
//             res.render('pages/error',
// 			        { objectType: config.viewer, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
//         }else{
//             post_data.reverse();
//             post_data_slice = post_data.slice(0, 20);
//             console.log(post_data_slice);
//             res.render('pages/forum', {posts: post_data_slice, objectType: objectType});
//         }
//     });
// });

router.get('/dat-cau-hoi', (req, res, next) => {
    res.render("pages/add_ask", {objectType: objectType});
});


router.get('/chitiet', function(req, res, next){
    Post.findOne({_id: req.query.id})
        .populate('authorId')
        .exec(function(err, data){
            if(err)
                return handleError(err);
            console.log(data);
            User.findOne({token: req.cookies.token}, (err, user)=>{
                if(err)
                    return handleError(err);

                res.render('pages/content_ask', {one_post: data, user: user, objectType: objectType});
            });
            
        });
    
});


router.get('/process-add', (req, res, next) => {
    var data = {
        _id: "NEW" + Number(new Date()),
        title: req.query.content_ask,
    }

    User.findOne({token: req.cookies.token}, (err, user)=>{
        if(err){
            res.render('pages/error', { objectType: config.viewer, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
        }else{
            data.authorId = user._id;
            data.postType = 1;
            data.active = true;
            data.timestamp = new Date();

            Post.create(data, (err, save) => {
                if(err){
                    res.render('pages/error', { objectType: config.viewer, message: 'Không tìm thấy dữ liệu phù hợp!', codeError: 404});
                }else{
                    res.render('pages/add_ask_success', {objectType: objectType});
                }
            })
        }
    });

})
module.exports = router;