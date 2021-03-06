var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var tools = require('./tools');
var config = require('../config.json');
var timeExpires  = config.cookieExpires*1000;
var defaultId = config.defaultId.user;
/**
 * Schema người dùng
 */
var User = new Schema({
    _id: String,
	name: String,
	card: String,
	phoneNumber: String,
	birthday: Date,
	sex: Boolean,
	address: String,
	image: String,
	userName: String,
	password: String,
	objectType: Number,
	level: String,
	experience: String,
	star: Number,
	departmentId: {type: String, ref: 'Department'},
	dean: Boolean,
    active: Boolean,
	timestamp: Date,
	token: String,
	expiresAt: Date
})
/**
 * Thêm người dùng => cần chỉnh sửa nếu thêm người dùng chưa có username, pass 
 * @param {object} data dữ liệu cần thêm
 * @param {function} callback hàm callback
 */
User.statics.inserts = function(data, callback){
	// Điều kiện tìm kiếm 
	// do có trường hợp thêm người dùng mà họ không có tài khoản
	// điều này dẫn đến trường hợp khó giải quyết là người dùng chưa có tài khoản
	// 		nhưng đã có hồ sơ, sau đó muốn tạo tài khoản đăng nhập
	var query = {};
	if (data.userName){
		query.userName = data.userName;
	} else{
		query._id = '!';
	}
	// model, query, defaultId, data, callback
	tools.Insert(UserModel, query, defaultId, data, callback);
}
/**
 * Tìm kiếm người dùng
 * typeFind 0-> admin, 1->doctor, 2->user
 * objectType 0->all (admin), 1->doctor, 2->user
 * chua tim dc neu viet khong dau
 * @param {string} data từ tìm kiếm
 * @param {number} objectType đối tượng gửi yêu cầu
 * @param {number} typeFind đối tượng được tìm kiếm
 * @param {function} callback  hàm callback
 */
User.statics.finds = function(data, objectType, typeFind, callback){
	var search = {$regex: '.*' + data + '.*', $options: 'i'};
	var lookupDepartment = {
		$lookup:{
			from: 'department',
			localField: 'departmentId',
			foreignField: '_id',
			as: 'departmentId'
		}
	}
	var match = {
		$match: {
			$or: [
				{_id: search},
				{name: search},
				{card: search},
				{phoneNumber: search},
				{userName: search},
				{address: search},
				{level: search},
				{experience: search},
				{token: search}
			]
		}
	}
	if (objectType != config.admin){
		match['$match'].active = true;
	}
	if (typeFind != config.admin){
		match['$match'].objectType = typeFind;
	}
	if (typeFind == config.doctor){
		match['$match']['$or'].push(
			{'departmentId._id': search},
			{'departmentId.name': search}
		);
	}
	this.aggregate([lookupDepartment,match]).sort({_id: 1}).exec(callback);
}
/**
 * Cập nhật người dùng
 * @param {object} data dữ liệu cập nhật
 * @param {function} callback  hàm callback
 */
User.statics.updates = function(data, callback){
	tools.Update.call(this, data, callback);
}
/**
 * 'Xóa' người dùng
 * @param {string} data _id người dùng
 * @param {function} callback hàm callback
 */
User.statics.deletes = function(data, callback){
	tools.Delete.call(this, data, callback);
}
/**
 * Lấy dữ liệu của 1 user
 * @param {string} data _id của user
 * @param {function} callback hàm callback
 */
User.statics.getDataUser = function(data, callback){
	var query = {
		_id: data
	}
	this.findOne(query, callback);
}
/**
 * Đăng nhập
 * @param {object} data dữ liệu đăng nhập
 * @param {function} callback hàm callback 
 */
User.statics.login = function(data, callback){
	var query = {
		userName: data.userName,
		active: true
	}
	this.findOne(query,(err, user) => {
		if(err || !user){
			callback(err ,user);
		} else{
			if (user.password == data.password){
				callback(null, user);
			} else{
				callback(new Error('Sai mật khẩu'), user);
			}
		}

	});
}
/**
 * Kiểm tra token
 * @param {string} data token
 * @param {function} callback hàm callback 
 */
User.statics.checkToken = function(data, callback){
	var query = {
		token: data,
		expiresAt: {$gt : new Date()}
	}
	this.findOne(query, callback);
}
/**
 * Cập nhật token
 * @param {object} data dữ liệu id và token
 * @param {function} callback hàm callback 
 */
User.statics.updateToken = function(data, callback){
	var query = data._id;
	var update = {
		$set: {
			token: data.token,
			// do dinh dang cua jwt exp la s chu khong phai mili s
			expiresAt: new Date(Date.now() + timeExpires),
			timestamp: new Date()
		}
	}
	this.findByIdAndUpdate(query,update,callback);
}
/**
 * name, Schema, collection
 */
var UserModel = mongoose.model('User', User, "user");
/**
 * Exports
 */
module.exports = UserModel;