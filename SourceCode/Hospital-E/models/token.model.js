var jwt = require('jsonwebtoken');
var config = require('../config.json');
var secretKey = config.secretKey;
var timeExpires  = config.timeExpires;
/**
 * Giải mã token
 * @param {http.request} req yêu cầu
 * @param {http.response} res đáp trả
 * @param {function} callback hàm callback
 */
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
/**
 * Mã hóa token khi đăng nhập
 * @param {object} data dữ liệu người dùng đăng nhập
 * @param {function} callback hàm callback
 */
function sign(data, callback){
    jwt.sign({data}, secretKey, {expiresIn: timeExpires}, callback);
}
/**
 * Exports
 */
module.exports = {
    verify: verify,
    sign: sign
}