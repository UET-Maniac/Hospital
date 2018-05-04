var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var tools = require('./tools');
var config = require('../config.json');
var defaultId = config.defaultId.medicine;
/**
 * Schema loại thuốc
 */
var Medicine = new Schema({
    _id: String,
	name: String,
	effect: String,
	use: String,
	description: String,
	medicalRecords: [{type: String, ref: 'MedicalRecord'}],
    active: Boolean,
    timestamp: Date
})
/**
 * Thêm một loại thuốc
 * @param {object} data dữ liệu của loại thuốc
 * @param {function} callback hàm callback 
 */
Medicine.statics.inserts = function(data, callback){
	var query = { name : data.name };
	tools.Insert(MedicineModel, query, defaultId, data, callback);
}
/**
 * Tìm kiếm loại thuốc => chưa có tìm kiếm theo hồ sơ
 * @param {String} data từ tìm kiếm
 * @param {number} objectType đối tượng gửi yêu cầu
 * @param {function} callback hàm callback 
 */
Medicine.statics.finds = function(data, objectType, callback){
	var search = {$regex: '.*' + data + '.*', $options: 'i'};
	var query = {
		$or: [
			{_id: search},
			{name: search},
			{effect: search}
		]
	}
	if (objectType != config.admin){
		query.active = true;
	}
	this.find(query,callback);
}
/**
 * Cập nhật loại thuốc
 * @param {object} data dữ liệu về loại thuốc
 * @param {function} callback hàm callback
 */
Medicine.statics.updates = function(data, callback){
	tools.Update.call(this, data, callback);
}
/**
 * 'Xóa' một loại thuốc
 * @param {string} data _id của loại thuốc
 * @param {function} callback hàm callback
 */
Medicine.statics.deletes = function(data, callback){
	tools.Delete.call(this, data, callback);
}
/**
 * Thêm hồ sơ vào tham chiếu trong mảng medicalRecords
 * @param {object} data dữ liệu cần thêm (_id của loại thuốc và medicalRecords (id) của hồ sơ)
 * @param {function} callback hàm callback 
 */
Medicine.statics.addIntoArray = function(data, callback){
	var add = {
		medicalRecords: data.medicalRecords
	}
	tools.addIntoArray.call(this, data._id, add, callback);
}
/**
 * name, Schema, collection
 */
var MedicineModel = mongoose.model('Medicine', Medicine, "medicine");
/**
 * Exports
 */
module.exports = MedicineModel;