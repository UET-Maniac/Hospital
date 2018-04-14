var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var tools = require('./tools.model');

var MedicalRecord = new Schema({
    _id: String,
	doctorId: String,
	patientId: String,
	bedNo: String,
	theDiagnosis: String,
	status: String,
	treatment: String,
	diseaseTypes: Array(String),
	medicines: Array(String),
    active: Boolean,
    timestamp: Date
})

MedicalRecord.statics.inserts = function(data, callback){
	var query = {};
	var defaultId = '';
	tools.Insert(MedicalRecordModel, query, defaultId, data, callback);
}

MedicalRecord.statics.finds = function(data, callback){
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

MedicalRecord.statics.updates = function(data, callback){
	tools.Update.call(this, data, callback);
}

MedicalRecord.statics.deletes = function(data, callback){
	tools.Delete.call(this, data, callback);
}

var MedicalRecordModel = mongoose.model('MedicalRecord', MedicalRecord, "medicalRecord");

module.exports = MedicalRecordModel;