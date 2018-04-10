var mongoose = require("mongoose")
var Schema = mongoose.Schema

var user = new Schema({
    userId: String,
	name: String,
	card: String,
	phoneNumber: String,
	birthday: Date,
	sex: Boolean,
	address: String,
	image: String,
	userName: String,
	password: String,
	doctor:
	{
		level: String,
		experience: String,
		star: Int32Array,
		departmentName: String,
		dean: Boolean
	},
	admin: Boolean,
    acctive: Boolean,
    timestamp: Date
})

module.exports = mongoose.model('user', user, "user") //name, Schema, collection