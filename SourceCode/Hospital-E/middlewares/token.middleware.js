var User = require("../models/user.model");
var Token = require("../models/token.model");

module.exports = function(req, res, next){
    if(req.cookies.token && typeof req.cookies.token !== 'undefined'){
        User.checkToken(req.cookies.token, (err, result) => {
            if(err || !result){
                console.log('Token khong phu hop')
                return next();
            } else{
                Token.verify(req, res, (err, auth) => {
                    if (err){
                        res.json('Không được định quyền');
                    } else{
                        req.auth = auth;
                        req.objectType = auth.data.objectType;
                        return next();
                    }
                })
            }
        })
    }
    else return next();
}