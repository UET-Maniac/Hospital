var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var tools = require('./tools');
var defaultId = require('../config.json').defaultId.rating;
/**
 * Schema đánh giá
 */
var Rating = new Schema({
    _id: String,
	doctorId: {type: String, ref: 'User'},
	patientId: {type: String, ref: 'User'},
	star: Number,
	content: String,
    active: Boolean,
    timestamp: Date
})
/**
 * Thêm 1 đánh giá => chưa có tự động cập nhật star của bác sĩ
 * và bị thừa khoản tìm xem dữ liệu đã có chưa
 * @param {object} data dữ liệu đánh giá
 * @param {function} callback hàm callback
 */
Rating.statics.inserts = function(data, callback){
	var query = {_id: '!'};
	tools.Insert(RatingModel, query, defaultId, data, callback);
}
/**
 * Tìm kiếm 1 đánh giá => chưa có tìm kiếm theo tên bác sĩ và tên người đánh giá
 * @param {string} data từ tìm kiếm
 * @param {number} objectType đối tượng gửi yêu cầu 
 * @param {function} callback hàm callback
 */
Rating.statics.finds = function(data, objectType, callback){
	var search = {$regex: '.*' + data + '.*', $options: 'i'};
	var query = {
		$or: [
			{_id: search},
			{doctorId: search},
			{patientId: search}
		]
	}
	if (objectType != 0)
		query.active = true;
	this.find(query)
		.populate({
			path: 'doctorId'
		})
		.populate({
			path: 'patientId'
		})
		.exec(callback)
}
/**
 * Cập nhật một đánh giá
 * @param {object} data dữ liệu cập nhật
 * @param {function} callback hàm callback
 */
Rating.statics.updates = function(data, callback){
	tools.Update.call(this, data, callback);
}
/**
 * 'Xóa' một đánh giá
 * @param {string} data _id đánh giá
 * @param {function} callback hàm callback
 */
Rating.statics.deletes = function(data, callback){
	tools.Delete.call(this, data, callback);
}
/**
 * name, Schema, collection
 */
var  RatingModel = mongoose.model('Rating', Rating, "rating");
/**
 * Exports
 */
module.exports = RatingModel;