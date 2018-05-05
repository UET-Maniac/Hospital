var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var tools = require('./tools');
var config = require('../config.json');
var defaultId = config.defaultId.medicalRecord;
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
	timeStart: Date,
	timeEnd: Date,
	medicines:String,
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
 * @param {string} objectType id người dùng
 * @param {function} callback hàm callback
 */
MedicalRecord.statics.finds = function(data, objectType, idObjectType, callback){
	var search = {$regex: '.*' + data + '.*', $options: 'i'};
	var lookupDoctor = {
		$lookup:{
			from: 'user',
			localField: 'doctorId',
			foreignField: '_id',
			as: 'doctor'
		}
	}
	var lookupPatient = {
		$lookup:{
			from: 'user',
			localField: 'patientId',
			foreignField: '_id',
			as: 'patient'
		}
	}
	var match = {
		$match: {
			$or: [
				{_id: search},
				{bedNo: search},
				{theDiagnosis: search},
				{medicines: search}
			]
		}
	}
	if (objectType != config.admin){
		match['$match'].active = true;
	}
	if (objectType == config.doctor){
		match['$match']['doctor._id'] = idObjectType;
		match['$match']['$or'].push(
			{'patient._id': search}, {'patient.name': search}, 
			{'patient.card': search},{'patient.phoneNumber': search}, 
			{'patient.userName': search}
		);
	} else if (objectType == config.user){
		match['$match']['patient._id'] = idObjectType;
		match['$match']['$or'].push({'doctor._id': search}, {'doctor.name': search});
	} else if (objectType == config.admin){
		match['$match']['$or'].push(
			{'patient._id': search}, {'patient.name': search}, 
			{'patient.card': search},{'patient.phoneNumber': search}, 
			{'patient.userName': search}
		);
		match['$match']['$or'].push({'doctor._id': search}, {'doctor.name': search});
	}
	this.aggregate([lookupDoctor,lookupPatient,match]).exec(callback);
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
 * name, Schema, collection
 */
var MedicalRecordModel = mongoose.model('MedicalRecord', MedicalRecord, "medicalRecord");
/**
 * Exports
 */
module.exports = MedicalRecordModel;