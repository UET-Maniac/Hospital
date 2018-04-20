var express = require('express');
var router = express.Router();
var Department = require("../../models/department.model");
var Token = require('../../models/token.model');

router.route('/')
    .get(function(req, res, next){
        var admin = false;
        if(req.body.token){
            Token.verify(req, res, (err, authData) => {
                if(authData.admin) admin = authData.admin;
            })
        }
        Department.finds('', admin, (err, departments) => {
            if (err){
                res.status('404').json({
                    message: "Can't find data suitable with this request!"
                })
            } else{
                // can check admin va render theo view rieng
                if (!admin){
                    res.render('pages/informationDepartment', {departments: departments});
                }
                else {

                }
            }
        });
    })
    .put(function(req, res, next){
        var data = '';
        if (req.body.data) data = req.body.data;
        var admin = false;
        Token.verify(req, res, (err, authData) => {
            if(authData.admin) admin = authData.admin;
        })
        Department.finds(data, admin, (err, departments) => {
            if (err){
                res.status('404').json({
                    message: "Can't find data suitable with this request!"
                })
            } else{
                // can check admin va render theo view rieng
                res.render('pages/informationDepartment', {departments: departments});
            }
        });
    })
    .post(function(req, res, next){
        var admin = false;
        Token.verify(req, res, (err, authData) => {
            if(authData.admin) admin = authData.admin;
        })
        if(admin){
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
        var admin = false;
        Token.verify(req, res, (err, authData) => {
            if(authData.admin) admin = authData.admin;
        })
        if (admin){
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
        var admin = false;
        Token.verify(req, res, (err, authData) => {
            if(authData.admin) admin = authData.admin;
        })
        if (admin){
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