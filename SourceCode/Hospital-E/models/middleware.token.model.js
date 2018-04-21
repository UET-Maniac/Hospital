var User = require("./user.model");
var Token = require("./token.model");

module.exports = function(req, res, next){
    if(req.body.token){
        User.checkToken(req.body.token, (err, result) => {
            if(err){
                res.status('404').json({
                    message: "Can't find data suitable with this request!"
                })
            } else{
                Token.verify(req, res, (err, authData) => {
                    req.authData = authData;
                    req.objectType = authData.objectType;
                })
            }
        })
    }
    next();
}