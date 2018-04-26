var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var tools = require('./tools.model');
var defaultId = require('../config.json').defaultId.department;
/**
 * Schema khoa
 */
var Department = new Schema({
	_id: String,
    name: String,
	description: String,
	address: String,
	image: String,
	foundingOn: Date,
	doctorIds: [{type: String, ref: 'User'}],
    active: Boolean,
    timestamp: Date
});
/**
 * Thêm khoa
 * @param {object} data dữ liệu theo form của khoa
 * @param {function} callback 
 */
Department.statics.inserts = function(data, callback){
	// Điều kiện tìm kiếm 
	var query = { name : data.name };
	// model, query, defaultId, data, callback
	tools.Insert(DepartmentModel, query, defaultId, data, callback);
}
/**
 * Tìm kiếm thông tin khoa
 * Phần này vẫn chưa tối ưu đc
 * type 0, còn lại là người dùng khác
 * @param {string} data từ tìm kiếm
 * @param {number} objectType kiểu người dùng
 * @param {function} callback hàm call back
 */
Department.statics.finds = function(data, objectType, callback){
	var search = {$regex: '.*' + data + '.*', $options: 'i'};
	var query = {
		$or: [
			{_id: search},
			{name: search},
			{description: search},
			{address: search}
		]
	}
	if (objectType != 0)
		query.active = true;
	this.find(query,callback);
};
/**
 * Update khoa
 * @param {string} data dữ liệu theo form của khoa
 * @param {function} callback hàm call back
 */
Department.statics.updates = function(data, callback){
	// Do sử dụng 'this' nên phải call để tham chiếu đến model
	// nếu không dùng cái này thì thêm 1 biến model rồi truyền model vào 
	tools.Update.call(this, data, callback);
}
/**
 * 'Xóa' khoa
 * @param {string} data _id khoa
 * @param {function} callback hàm call back
 */
Department.statics.deletes = function(data, callback){
	tools.Delete.call(this, data, callback);
}

Department.statics.findIncludeWithDoctor = function(data, objectType, callback){
	var search = {$regex: '.*' + data + '.*', $options: 'i'};
	var query = {
		$or: [
			{_id: search},
			{name: search}
		]
	}
	if (objectType != 0){
		query.active = true;
	}
	DepartmentModel.find(query)
		.select('_id')
		.select('name')
		.select('doctorIds')
		.exec((err, departments) => {
			if(err || !departments){
				callback(err, departments);
			} else{
				DepartmentModel.populate(departments, 
					{path: 'doctorIds', select: {'_id': 1, 'name': 1}}, callback)
			}
		})
}
/**
 * name, Schema, collection
 */
var DepartmentModel = mongoose.model('Department', Department, 'department');
/**
 * Export
 */
module.exports = DepartmentModel;
