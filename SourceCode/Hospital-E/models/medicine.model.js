var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var tools = require('./tools.model');

var Medicine = new Schema({
    _id: String,
	name: String,
	effect: String,
	use: {type: String, ref: 'User'},
	description: String,
	medicalRecords: [{type: String, ref: 'MedicalRecord'}],
    active: Boolean,
    timestamp: Date
})

Medicine.statics.inserts = function(data, callback){
	var query = { name : data.name };
	var defaultId = 'MED10000000';
	tools.Insert(MedicineModel, query, defaultId, data, callback);
}

Medicine.statics.finds = function(data, callback){
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

Medicine.statics.updates = function(data, callback){
	tools.Update.call(this, data, callback);
}

Medicine.statics.deletes = function(data, callback){
	tools.Delete.call(this, data, callback);
}

Medicine.statics.addIntoArray = function(data, callback){
	var add = {
		medicalRecords: data.medicalRecords
	}
	tools.addIntoArray.call(this, data._id, add, callback);
}

var MedicineModel = mongoose.model('Medicine', Medicine, "medicine");

module.exports = MedicineModel;