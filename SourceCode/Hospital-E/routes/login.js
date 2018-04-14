var express = require('express');
var router = express.Router();
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
            if(err){
                //
                res.status(500).json({
                    message: 'Error with server'
                })
            } else if(user){
                // Có cách nào mà có hay không có {user: user} index.ejs nó không lỗi không nhỉ?
                // Với lại có cách nào mà cái thông tin user sau đăng nhập được gắn vô head
                // để thuận tiện cho việc check trong các phần sau không nhỉ?
                // res.render("pages/index", {user: user});
                res.render("pages/index");
            } else{
                //
                res.status(404).json({
                    message: 'User name or password is wrong'
                })
            }
        })
    })

module.exports = router;