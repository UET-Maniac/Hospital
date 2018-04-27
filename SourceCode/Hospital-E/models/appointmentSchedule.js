var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var tools = require('./tools');
var defaultId = require('../config.json').defaultId.appointmentSchedule;
/**
 * Schema lịch hẹn
 */
var AppointmentSchedule = new Schema({
    _id: String,
	doctorId: {type: String, ref: 'User'},
	patientId: {type: String, ref: 'User'},
	time: Date,
	address: String,
	description: String,
	acceptance: Boolean,
    active: Boolean,
    timestamp: Date
})
/**
 * Thêm lịch hẹn => thừa phần tìm dữ liệu trùng lặp
 * @param {object} data dữ liệu lịch hẹn
 * @param {function} callback hàm callback
 */
AppointmentSchedule.statics.inserts = function(data, callback){
	var query = {_id: '!'};
	tools.Insert(AppointmentScheduleModel, query, defaultId, data, callback);
}
/**
 * Tìm kiếm lịch hẹn => ... thiếu
 * @param {string} data từ tìm kiếm
 * @param {number} objectType kiểu người dùng
 * @param {function} callback hàm callback
 */
AppointmentSchedule.statics.finds = function(data, objectType, callback){
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
 * Cập nhật lịch hẹn
 * @param {object} data dữ liệu lịch hẹn
 * @param {function} callback hàm callback
 */
AppointmentSchedule.statics.updates = function(data, callback){
	tools.Update.call(this, data, callback);
}
/**
 * 'Xóa' lịch hẹn
 * @param {string} data _id của lịch hẹn
 * @param {function} callback hàm callback
 */
AppointmentSchedule.statics.deletes = function(data, callback){
	tools.Delete.call(this, data, callback);
}
/**
 * name, Schema, collection
 */
var AppointmentScheduleModel = mongoose.model('AppointmentSchedule', AppointmentSchedule, "appointmentSchedule")
/**
 * Exports
 */
module.exports = AppointmentScheduleModel;