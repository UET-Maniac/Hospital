var mongoose = require("mongoose")
var Schema = mongoose.Schema

var medicine = new Schema({
    medicineId: String,
	name: String,
	effect: String,
	use: String,
	description: String,
	medicalRecords: Array(String),
    acctive: Boolean,
    timestamp: Date
})

module.exports = mongoose.model('medicine', medicine, "medicine") //name, Schema, collection