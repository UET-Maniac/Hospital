var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var tools = require('./tools.model');
var defaultId = require('../config.json').defaultId.medicalRecord;
/**
 * Schema hồ sơ bệnh án
 */
var MedicalRecord = new Schema({
    _id: String,
	doctorId: {type: String, ref: 'User'},
	patientId: {type: String, ref: 'User'},
	bedNo: String,
	theDiagnosis: String,
	status: String,
	treatment: String,
	diseaseTypes: [{type: String, ref: 'DiseaseType'}],
	medicines:[{type: String, ref: 'Medicine'}],
    active: Boolean,
    timestamp: Date
})
/**
 * Thêm hồ sơ => thừa phần tìm dữ liệu giống
 * @param {object} data dữ liệu hồ sơ
 * @param {function} callback hàm callback 
 */
MedicalRecord.statics.inserts = function(data, callback){
	var query = {_id: '!'};
	tools.Insert(MedicalRecordModel, query, defaultId, data, callback);
}
/**
 * Tìm kiếm hồ sơ => chưa tìm kiếm theo theo tên của bệnh nhân, bác sĩ .....
 * @param {string} data từ tìm kiếm
 * @param {number} objectType đối tượng gửi yêu cầu
 * @param {function} callback hàm callback 
 */
MedicalRecord.statics.finds = function(data, objectType, callback){
	var search = {$regex: '.*' + data + '.*', $options: 'i'};
	var query = {
		$or: [
			{_id: search},
			// .....
		]
	}
	if (objectType != 0)
		query.active = true;
	this.find(query,callback);
}
/**
 * Cập nhật hồ sơ
 * @param {object} data dữ liệu của hồ sơ
 * @param {function} callback hàm callback 
 */
MedicalRecord.statics.updates = function(data, callback){
	tools.Update.call(this, data, callback);
}
/**
 * 'Xóa' hồ sơ
 * @param {string} data _id của hồ sơ
 * @param {function} callback hàm callback 
 */
MedicalRecord.statics.deletes = function(data, callback){
	tools.Delete.call(this, data, callback);
}
/**
 * Thêm loại bệnh vào tham chiếu trong mảng diseaseTypes
 * @param {object} data dữ liệu cần thêm (_id của hồ sơ và diseaseTypes (id) của loại bệnh)
 * @param {function} callback hàm callback 
 */
MedicalRecord.statics.addIntoArrayDiseaseTypes = function(data, callback){
	var add = {
		diseaseTypes: data.diseaseTypes
	}
	tools.addIntoArray.call(this, data._id, add, callback);
}
/**
 * Thêm loại thuốc vào tham chiếu trong mảng medicines
 * @param {object} data dữ liệu cần thêm (_id của hồ sơ và medicines (id) của loại thuốc)
 * @param {function} callback hàm callback 
 */
MedicalRecord.statics.addIntoArrayMedicines = function(data, callback){
	var add = {
		medicines: data.medicines
	}
	tools.addIntoArray.call(this, data._id, add, callback);
}
/**
 * name, Schema, collection
 */
var MedicalRecordModel = mongoose.model('MedicalRecord', MedicalRecord, "medicalRecord");
/**
 * Exports
 */
module.exports = MedicalRecordModel;