var mongoose = require("mongoose")
var Schema = mongoose.Schema;
var tools = require('./tools.model');

var DiseaseType = new Schema({
    _id: String,
	name: String,
	medicalRecords: [{type: String, ref: 'MedicalRecord'}],
    active: Boolean,
    timestamp: Date
})

DiseaseType.statics.inserts = function(data, callback){
	var query = { name : data.name };
	var defaultId = '';
	tools.Insert(DiseaseTypeModel, query, defaultId, data, callback);
}

DiseaseType.statics.finds = function(data, callback){
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

DiseaseType.statics.updates = function(data, callback){
	tools.Update.call(this, data, callback);
}

DiseaseType.statics.deletes = function(data, callback){
	tools.Delete.call(this, data, callback);
}

var DiseaseTypeModel = mongoose.model('DiseaseType', DiseaseType, "diseaseType");

module.exports = DiseaseTypeModel;