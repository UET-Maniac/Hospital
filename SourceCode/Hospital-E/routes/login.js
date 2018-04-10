var express = require('express');
var router = express.Router();
var Account = require("../models/accountModel.js")


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('pages/login');
});

router.post('/', function(req, res, next) {
    Account.find({}, function(err, user) {
        user.forEach(function(val, index) {
            if (val.email = req.body.email && val.pass == req.body.pass) {
                res.render("pages/index")
            } else {
                res.end(JSON.stringify(req.body))
            }
        })
    })
})

module.exports = router;