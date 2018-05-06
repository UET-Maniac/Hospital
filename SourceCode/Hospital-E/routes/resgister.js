var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require("../models/user");
var Token = require("../models/token");
var config = require('../config.json');

router.route('/')
    .get(function(req, res, next) {
        res.render('pages/resgister', {objectType: config.viewer});
    });

router.post("/", (req, res, next) => {
    
    var data = {
        userName: req.body.email,
        password: req.body.password,
        _id : mongoose.Types.ObjectId(),
        objectType : 0
    }
    
    var account = new User({
        _id: data._id,
        name: "",
        card: "",
        phoneNumber: "",
        birthday: new Date(),
        sex: true,
        address: "",
        image: "",
        userName: "",
        password: "",
        objectType: 0,
        level: "",
        experience: "",
        star: 0,
        departmentId: null,
        dean: false,
        active: true,
        timestamp: new Date(),
        token: "",
        expiresAt: new Date()
    });

    account.save(function(err, result){
        if(err){
            return console.log(err);
        }else{
            console.log(result);
            Token.sign(data, (err, token) => {
                res.cookie('token', token, { expire: new Date() + config.cookieExpires });
                data.token = token;
                User.updateToken(data, (err, resultx) => {
                    if (err) {
                        res.render('pages/error',
                            { objectType: config.viewer , message: 'Xảy ra lỗi với server!', codeError: 500});
                    } else {
                        res.redirect('/');
                        res.render("pages/index", {objectType: data.objectType});
                    }
                });
            });
            res.render("pages/index", {objectType: data.objectType});
        }
    });
})
 

module.exports = router;