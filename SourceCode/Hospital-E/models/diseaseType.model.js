var mongoose = require("mongoose")
var Schema = mongoose.Schema;
var tools = require('./tools.model');
var defaultId = require('../config.json').defaultId.diseaseType;
/**
 * Schema loại bệnh
 */
var DiseaseType = new Schema({
    _id: String,
	name: String,
	description: String,
	medicalRecords: [{type: String, ref: 'MedicalRecord'}],
    active: Boolean,
    timestamp: Date
})
/**
 * Thêm loại bệnh
 * @param {object} data dữ liệu loại bệnh (_id, name, description)
 * @param {function} callback hàm callback 
 */
DiseaseType.statics.inserts = function(data, callback){
	var query = { name : data.name };
	tools.Insert(DiseaseTypeModel, query, defaultId, data, callback);
}
/**
 * Tìm kiếm loại bệnh => chưa có tìm kiếm loại bệnh theo hồ sơ
 * @param {string} data từ tìm kiếm
 * @param {number} objectType đối tượng gửi yêu cầu
 * @param {function} callback hàm callback 
 */
DiseaseType.statics.finds = function(data, objectType, callback){
	var search = {$regex: '.*' + data + '.*', $options: 'i'};
	var query = {
		$or: [
			{_id: search},
			{name: search},
			{description: search}
		]
	}
	if (objectType != 0)
		query.active = true;
	this.find(query,callback);
}
/**
 * Cập nhật loại bệnh
 * @param {object} data dữ liệu loại bệnh
 * @param {function} callback hàm callback 
 */
DiseaseType.statics.updates = function(data, callback){
	tools.Update.call(this, data, callback);
}
/**
 * 'Xóa' loại bệnh
 * @param {string} data _id loại bệnh
 * @param {function} callback hàm callback 
 */
DiseaseType.statics.deletes = function(data, callback){
	tools.Delete.call(this, data, callback);
}
/**
 * Thêm hồ sơ vào tham chiếu trong mảng medicalRecords
 * @param {object} data dữ liệu cần thêm (_id của loại bệnh và medicalRecords (id) của hồ sơ)
 * @param {function} callback hàm callback 
 */
DiseaseType.statics.addIntoArray = function(data, callback){
	var add = {
		medicalRecords: data.medicalRecords
	}
	tools.addIntoArray.call(this, data._id, add, callback);
}
/**
 * name, Schema, collection
 */
var DiseaseTypeModel = mongoose.model('DiseaseType', DiseaseType, "diseaseType");
/**
 * Exports
 */
module.exports = DiseaseTypeModel;