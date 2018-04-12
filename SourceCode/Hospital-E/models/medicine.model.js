var mongoose = require("mongoose")
var Schema = mongoose.Schema

var medicine = new Schema({
    _id: String,
	name: String,
	effect: String,
	use: String,
	description: String,
	medicalRecords: Array(String),
    acctive: Boolean,
    timestamp: Date
})

var Medicine = mongoose.model('medicine', medicine, "medicine") //name, Schema, collection

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