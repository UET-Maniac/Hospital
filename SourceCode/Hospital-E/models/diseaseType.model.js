var mongoose = require("mongoose")
var Schema = mongoose.Schema

var diseaseType = new Schema({
    _id: String,
	name: String,
	medicalRecords: Array(String),
    active: Boolean,
    timestamp: Date
})

var DiseaseType = mongoose.model('diseaseType', diseaseType, "diseaseType") //name, Schema, collection

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