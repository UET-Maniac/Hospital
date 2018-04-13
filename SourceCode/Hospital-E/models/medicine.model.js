var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Delete = require('./delete.model');

var Medicine = new Schema({
    _id: String,
	name: String,
	effect: String,
	use: String,
	description: String,
	medicalRecords: Array(String),
    active: Boolean,
    timestamp: Date
})

Medicine.statics.inserts = function(data, callback){
	
}

Medicine.statics.finds = function(data, callback){
	
}

Medicine.statics.updates = function(data, callback){
	
}

Medicine.statics.deletes = function(data, callback){
	Delete.call(this, data, callback);
}

module.exports = mongoose.model('Medicine', medicine, "medicine")