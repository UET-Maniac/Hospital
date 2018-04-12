var mongoose = require("mongoose")
var Schema = mongoose.Schema

var appointmentSchedule = new Schema({
    _id: String,
	doctorId: String,
	patientId: String,
	time: Date,
	address: String,
	description: String,
	acceptance: Boolean,
    active: Boolean,
    timestamp: Date
})

var AppointmentSchedule = mongoose.model('appointmentSchedule', appointmentSchedule, "appointmentSchedule") //name, Schema, collection

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