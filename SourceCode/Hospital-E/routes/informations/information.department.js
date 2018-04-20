var express = require('express');
var router = express.Router();
var Department = require("../../models/department.model");
var User = require('../../models/user.model');
var Token = require('../../models/token.model');

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
        Department.finds('', objectType, (err, departments) => {
            if (err){
                res.status('404').json({
                    message: "Can't find data suitable with this request!"
                })
            } else{
                // can check objectType va render theo view rieng
                if (!objectType){
                    res.render('pages/informationDepartment', {departments: departments});
                }
                else {
                    res.render('pages/informationDepartment', {departments: departments});
                }
            }
        });
    })
    .put(function(req, res, next){
        var data = '';
        if (req.body.data) data = req.body.data;
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
        Department.finds(data, objectType, (err, departments) => {
            if (err){
                res.status('404').json({
                    message: "Can't find data suitable with this request!"
                })
            } else{
                // can check objectType va render theo view rieng
                res.render('pages/informationDepartment', {departments: departments});
            }
        });
    })
    .post(function(req, res, next){
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
        if(objectType){
            Department.inserts(req.body.data, (err, departments) => {
                if (err){
                    res.status('409').json({
                        message: "Data exited!"
                    })
                } else{
                    // render to information
                    res.send("thanhcong");
                }
            });
        } else{
            res.status('404').json({
                message: "Not found!"
            })
        }
    })
    .patch(function(req, res, next){
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
        if (objectType){
            Department.updates(req.body.data, (err, departments) => {
                if (err){
                    res.status('500').json({
                        message: "Error with server!"
                    })
                } else{
                    // render to information
                    res.send("thanhcong");
                }
            });
        } else{
            res.status('404').json({
                message: "Not found!"
            })
        }
    })
    .delete(function(req, res, next){
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
        if (objectType){
            Department.deletes(req.body.data, (err, departments) => {
                if (err){
                    res.status('500').json({
                        message: "Error with server!"
                    })
                } else{
                    // render to information
                    res.send("thanhcong");
                }
            });
        } else{
            res.status('404').json({
                message: "Not found!"
            })
        }
    })

module.exports = router;