var mongoose = require("mongoose")
var Schema = mongoose.Schema

var diseaseType = new Schema({
    diseaseTypeId: String,
	name: String,
	medicalRecords: Array(String),
    acctive: Boolean,
    timestamp: Date
})

module.exports = mongoose.model('diseaseType', diseaseType, "diseaseType") //name, Schema, collection