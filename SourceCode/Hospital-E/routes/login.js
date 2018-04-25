var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require("../models/user.model");
var Token = require("../models/token.model");
var config = require('../config.json');

router.route('/')
    .get(function(req, res, next) {
        res.render('pages/login', {objectType: config.viewer});
    })
    .post(function(req, res, next) {
        var data = {
            userName: req.body.userName,
            password: req.body.password
        }
        User.login(data, function(err, user) {
            if (user && !err) {
                data._id = user._id;
                data.objectType = user.objectType;
                Token.sign(data, (err, token) => {
                    res.cookie('token', token, { expire: new Date() + config.cookieExpires });
                    // res.setHeader('content-type', 'application/json');
                    // res.setHeader('Authorization', token);
                    data.token = token;
                    User.updateToken(data, (err, result) => {
                        if (err) {
                            res.render('pages/error500',
                                { objectType: config.viewer , message: 'Xảy ra lỗi với server!'});
                        } else {
                            // chua thong bao thanh cong dang nhap
                            res.redirect('/');
                            res.render("pages/index", {objectType: data.objectType});
                        }
                    })
                })
            } else if(user && err){
                res.render('pages/error404',
                    { objectType: config.viewer , message: 'Sai mật khẩu! Vui lòng đăng nhập lại'});
            } else{
                res.render('pages/error404',
                    { objectType: config.viewer, message: 'Tên đăng nhập không tồn tại!'});
            }
        })
    });

module.exports = router;