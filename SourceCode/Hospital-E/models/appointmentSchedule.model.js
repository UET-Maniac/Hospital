var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var tools = require('./tools.model');

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
	var query = {};
	var defaultId = '';
	tools.Insert(AppointmentScheduleModel, query, defaultId, data, callback);
}

AppointmentSchedule.statics.finds = function(data, type, callback){
	var search = {$regex: '.*' + data + '.*', $options: 'i'};
	var query = {
		$or: [
			{_id: search},
			// .....
		]
	}
	if (type != 0)
		query.active = true;
	this.find(query,callback);
}

AppointmentSchedule.statics.updates = function(data, callback){
	tools.Update.call(this, data, callback);
}

AppointmentSchedule.statics.deletes = function(data, callback){
	tools.Delete.call(this, data, callback);
}

var AppointmentScheduleModel = mongoose.model('AppointmentSchedule', appointmentSchedule, "appointmentSchedule")

module.exports = AppointmentScheduleModel;