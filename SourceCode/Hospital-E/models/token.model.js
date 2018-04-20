var jwt = require('jsonwebtoken');
// can lay secrectKey va timeExpires trong config
var secretKey = 'secrectKey';
var timeExpires  = '3600s';

function verify(req, res, callback){
    // check token
	var token = req.body.token;
    // Check if bearer is undefined
    if (typeof token !== 'undefined'){
        jwt.verify(token, secretKey, callback)
    } else{
        res.sendStatus(403);
    }
}

function sign(data, callback){
    jwt.sign({data}, secretKey, {expiresIn: timeExpires}, callback);
}

module.exports = {
    verify: verify,
    sign: sign
}