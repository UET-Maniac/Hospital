var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Delete = require('./delete.model');

var AppointmentSchedule = new Schema({
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

AppointmentSchedule.statics.inserts = function(data, callback){
	
}

AppointmentSchedule.statics.finds = function(data, callback){
	
}

AppointmentSchedule.statics.updates = function(data, callback){
	
}

AppointmentSchedule.statics.deletes = function(data, callback){
	Delete.call(this, data, callback);
}

module.exports = mongoose.model('AppointmentSchedule', appointmentSchedule, "appointmentSchedule")