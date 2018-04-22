var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var tools = require('./tools.model');
var defaultId = require('../config.json').defaultId.medicine;
/**
 * Schema loại thuốc
 */
var Medicine = new Schema({
    _id: String,
	name: String,
	effect: String,
	use: {type: String, ref: 'User'},
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
 * 
 * @param {*} data 
 * @param {function} callback hàm callback 
 */
Medicine.statics.finds = function(data, callback){
	var search = {$regex: '.*' + data + '.*', $options: 'i'};
	var query = {
		$or: [
			{_id: search},
			// .....
		]
	}
	if (type != 0)
		query.active = true;
	this.find(query,callback);
}
/**
 * 
 * @param {*} data 
 * @param {function} callback hàm callback
 */
Medicine.statics.updates = function(data, callback){
	tools.Update.call(this, data, callback);
}
/**
 * 
 * @param {*} data 
 * @param {function} callback hàm callback
 */
Medicine.statics.deletes = function(data, callback){
	tools.Delete.call(this, data, callback);
}
/**
 * 
 * @param {*} data 
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