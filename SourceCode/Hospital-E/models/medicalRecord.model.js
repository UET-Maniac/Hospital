var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Delete = require('./delete.model');

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
	
}

MedicalRecord.statics.finds = function(data, callback){
	
}

MedicalRecord.statics.updates = function(data, callback){
	
}

MedicalRecord.statics.deletes = function(data, callback){
	Delete.call(this, data, callback);
}

module.exports = mongoose.model('MedicalRecord', medicalRecord, "medicalRecord")