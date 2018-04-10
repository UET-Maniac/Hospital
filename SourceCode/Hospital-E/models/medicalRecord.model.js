var mongoose = require("mongoose")
var Schema = mongoose.Schema

var medicalRecord = new Schema({
    recordId: String,
	doctorId: String,
	patientId: String,
	bedNo: String,
	theDiagnosis: String,
	status: String,
	treatment: String,
	diseaseTypes: Array(String),
	medicines: Array(String),
    acctive: Boolean,
    timestamp: Date
})

module.exports = mongoose.model('medicalRecord', medicalRecord, "medicalRecord") //name, Schema, collection