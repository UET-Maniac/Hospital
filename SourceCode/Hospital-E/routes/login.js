var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var Account = require('../models/accountModel');
var User = require("../models/user.model");
var Token = require("../models/token.model");


/* GET home page. */
router.route('/')
    .get(function(req, res, next) {
        res.render('pages/login');
    })
    .put(function(req, res, next) {
        var data = {
            userName: req.body.userName,
            password: req.body.password
        }
        console.log(data);
        User.login(data, function(err, user) {
            if (err) {
                //
                res.status(500).json({
                    message: 'Error with server'
                })
            } else if (user) {
                data._id = user._id;
                data.objectType = user.objectType;
                Token.sign(data, (err, token) => {
                    console.log(1);
                    data.token = token;
                    User.updateToken(data, (err, result) => {
                        if (err) {
                            res.status(500).json({
                                message: 'Error with server'
                            })
                        } else {
                            // chua gui token
                            res.render("pages/index");
                        }
                    })
                })
            } else {
                //
                res.status(404).json({
                    message: 'User name or password is wrong'
                })
            }
        })
    });


// router.get('/', (req, res, next) => {
//     res.render('pages/login');
// });

// router.post('/', (req, res, next) => {
//     var data = {
//         email: req.body.email,
//         pass: req.body.pass
//     };
//     Account.find({ 'email': data.email, 'pass': data.pass })
//         .exec()
//         .then(doc => {
//             console.log("From database:", doc);
//             if (doc) {
//                 jwt.sign({ doc }, 'secretkey', { expiresIn: '5000s' }, (err, token) => {
//                     res.cookie('auth', token);
//                     //tra header cho response thoi
//                     // res.setHeader('content-type', 'application/json');
//                     // res.setHeader('Authorization', token);
//                     res.render('pages/index');
//                 });
//             } else {
//                 res.status(404).json({ message: "No valid entru found!" });
//             }
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({ error: err });
//         });
// });

module.exports = router;