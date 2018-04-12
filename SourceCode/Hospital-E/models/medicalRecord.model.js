var mongoose = require("mongoose")
var Schema = mongoose.Schema

var medicalRecord = new Schema({
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

var MedicalRecord = mongoose.model('medicalRecord', medicalRecord, "medicalRecord") //name, Schema, collection

function inserts(data, callback){
	
}

function finds(data, callback){
	
}

function updates(data, callback){
	
}

function deletes(data, callback){
	
}

module.exports = {
	finds: finds,
	inserts: inserts,
	updates: updates,
	deletes: deletes
}