var mongoose = require("mongoose")
var Schema = mongoose.Schema

var department = new Schema({
    name: String,
	description: String,
	address: String,
	image: String,
	foundingOn: Date,
    acctive: Boolean,
    timestamp: Date
})

var Department = mongoose.model('department', department, "department") //name, Schema, collection

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