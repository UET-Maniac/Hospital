var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var tools = require('./tools.model');
var timeExpires  = require('../config.json').timeExpires;
/**
 * Schema
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
    timestamp: Date
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
		query.userName = data.userName 
	} else{
		query._id = '!';
	}
	var defaultId = 'USE100000000';
	// model, query, defaultId, data, callback
	tools.Insert(UserModel, query, defaultId, data, callback);
}
/**
 * Tìm kiếm người dùng
 * typeFind 0-> admin, 1->doctor, 2->user
 * objectType 0->all (admin), 1->doctor, 2->user
 * chua tim dc neu viet khong dau
 * chua tim duoc neu tim kiem ban ten khoa
 * @param {string} data từ tìm kiếm
 * @param {number} objectType đối tượng gửi yêu cầu
 * @param {number} typeFind đối tượng được tìm kiếm
 * @param {function} callback  hàm callback
 */
User.statics.finds = function(data, objectType, typeFind, callback){
	var search = {$regex: '.*' + data + '.*', $options: 'i'};
	var query = {
		$or: [
			{_id: search},
			{name: search},
			{address: search},
			{card: search},
			{phoneNumber: search},
			{level: search},
			{experience: search},
			{star: data},
			{departmentId: search}
		]
	}
	if (typeFind != 0){
		query.objectType = typeFind;
	}
	if (objectType != 0){
		query.active = true;
	}
	if (typeFind == 2){
		this.find(query, callback)
	} else{
		this.find(query)
			.populate({
				path: 'departmentId'
			})
			.exec(callback)
	}
}
/**
 * Cập nhật người dùng
 * @param {object} data dữ liệu cập nhật
 * @param {number} objectType đối tượng gửi yêu cầu 
 * @param {function} callback  hàm callback
 */
User.statics.updates = function(data, objectType, callback){
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
 * Đăng nhập
 * @param {object} data dữ liệu đăng nhập
 * @param {function} callback hàm callback 
 */
User.statics.login = function(data, callback){
	var query = {
		userName: data.userName,
		password: data.password
	}
	this.findOne(query,callback);
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