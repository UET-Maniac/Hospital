var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Delete = require('./delete.model');

var Department = new Schema({
	_id: String,
    name: String,
	description: String,
	address: String,
	image: String,
	foundingOn: Date,
    active: Boolean,
    timestamp: Date
});

Department.statics.insertOrUpdate = function(data, callback){
	var data = new Department(data);
	data.active = true;
	data.timestamp = new Date.now();
	this.save(callback);
}

Department.statics.finds = function(data, type, callback){
	var search = {$regex: '.*' + data + '.*', $options: 'i'};
	var query = {
		$or: [
			{_id: search},
			{name: search},
			{description: search},
			{address: search}
		]
	}
	if (type != 0)
		query.active = true;
	this.find(query,callback);
};

Department.statics.deletes = function(data, callback){
	Delete.call(this, data, callback);
}

module.exports = mongoose.model('Department', Department, 'department')
//name, Schema, collection