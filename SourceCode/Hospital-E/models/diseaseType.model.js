var mongoose = require("mongoose")
var Schema = mongoose.Schema

var DiseaseType = new Schema({
    _id: String,
	name: String,
	medicalRecords: Array(String),
    active: Boolean,
    timestamp: Date
})

DiseaseType.statics.inserts = function(data, callback){
	
}

DiseaseType.statics.finds = function(data, callback){
	
}

DiseaseType.statics.updates = function(data, callback){
	
}

DiseaseType.statics.deletes = function(data, callback){
	
}

module.exports = mongoose.model('DiseaseType', diseaseType, "diseaseType")