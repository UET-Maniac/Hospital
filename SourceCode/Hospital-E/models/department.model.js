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

module.exports = mongoose.model('department', department, "department") //name, Schema, collection