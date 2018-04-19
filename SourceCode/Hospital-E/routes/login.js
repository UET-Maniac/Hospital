var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var Account = require('../models/accountModel');
var User = require("../models/user.model.js")


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
        User.login(data, function(err, user) {
            if (err) {
                //
                res.status(500).json({
                    message: 'Error with server'
                })
            } else if (user) {
                // Có cách nào mà có hay không có {user: user} index.ejs nó không lỗi không nhỉ?
                // Với lại có cách nào mà cái thông tin user sau đăng nhập được gắn vô head
                // để thuận tiện cho việc check trong các phần sau không nhỉ?
                // res.render("pages/index", {user: user});
                res.render("pages/index");
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
//                 res.status(200).json({
//                     products: doc,
//                     request: {
//                         type: 'GET',
//                         url: 'https://localhost:3000/login/'
//                     }

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