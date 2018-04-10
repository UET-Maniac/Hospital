var mongoose = require("mongoose")
var Schema = mongoose.Schema

var appointmentSchedule = new Schema({
    scheduleId: String,
	doctorId: String,
	patientId: String,
	time: Date,
	address: String,
	description: String,
	acceptance: Boolean,
    acctive: Boolean,
    timestamp: Date
})

module.exports = mongoose.model('appointmentSchedule', appointmentSchedule, "appointmentSchedule") //name, Schema, collection