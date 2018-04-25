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
    // Check if req.cookies.auth is undefined
    if (typeof req.cookies.token !== 'undefined'){
        var token = req.cookies.token;
        jwt.verify(token, secretKey, callback);
    } else{
        callback(new Error('Không được định quyền'), null);
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