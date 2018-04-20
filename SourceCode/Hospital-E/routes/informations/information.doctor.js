var express = require('express');
var router = express.Router();
var Doctor = require("../../models/user.model");

router.route('/')
    .get(function(req, res, next){
        var objectType = 2; // type admin 0, doctor 1, user 2
        if(req.body.token){
            User.checkToken(req.body.token, (err, result) => {
                if(err){
                    res.status('404').json({
                        message: "Can't find data suitable with this request!"
                    })
                } else{
                    Token.verify(req, res, (err, authData) => {
                        objectType = authData.objectType;
                    })
                }
            })
        }
        //
        objectType = 0;
        //
        var typeFind = 1; //typeFind 1 find doctor, 2 find user, 0 find all
        //
        Doctor.finds('', objectType, typeFind, (err, doctors) => {
            if (err){
                res.status('404').json({
                    message: "Can't find data suitable with this request!"
                })
            } else{
                console.log(doctors[0]);
                res.render('pages/informationDoctor', {doctors: doctors});
            }
        });
    })
    .put(function(req, res, next){
        var data = '';
        if (req.body.data) data = req.body.data;
        console.log(data);
        var objectType = 2; // type admin 0, doctor 1, user 2
        if(req.body.token){
            User.checkToken(req.body.token, (err, result) => {
                if(err){
                    res.status('404').json({
                        message: "Can't find data suitable with this request!"
                    })
                } else{
                    Token.verify(req, res, (err, authData) => {
                        objectType = authData.objectType;
                    })
                }
            })
        }
        //
        objectType = 0;
        //
        var typeFind = 1;
        //
        Doctor.finds(data, objectType, typeFind, (err, doctors) => {
            if (err){
                res.status('404').json({
                    message: "Can't find data suitable with this request!"
                })
            } else{
                res.render('pages/informationDoctor', {doctors: doctors});
            }
        });
    })
    // .post(function(req, res, next){
    //     // chưa kiểm tra điều kiện là admin 
    //     Doctor.inserts(req.body.data, (err, doctors) => {
    //         if (err){
    //             res.status('409').json({
    //                 message: "Data exited!"
    //             })
    //         } else{
    //             // render to information
    //             res.send("thanhcong");
    //         }
    //     });
    // })
    // .patch(function(req, res, next){
    //     // chưa kiểm tra điều kiện là admin 
    //     Doctor.updates(req.body.data, (err, doctors) => {
    //         if (err){
    //             res.status('500').json({
    //                 message: "Error with server!"
    //             })
    //         } else{
    //             // render to information
    //             res.send("thanhcong");
    //         }
    //     });
    // })
    // .delete(function(req, res, next){
    //     // chưa kiểm tra điều kiện là admin 
    //     Doctor.deletes(req.body.data, (err, doctors) => {
    //         if (err){
    //             res.status('500').json({
    //                 message: "Error with server!"
    //             })
    //         } else{
    //             // render to information
    //             res.send("thanhcong");
    //         }
    //     });
    // })

module.exports = router;