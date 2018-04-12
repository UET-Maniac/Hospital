var mongoose = require("mongoose")
var Schema = mongoose.Schema

var department = new Schema({
	_id: String,
    name: String,
	description: String,
	address: String,
	image: String,
	foundingOn: Date,
    active: Boolean,
    timestamp: Date
});

var Department = mongoose.model('Department', department, "department") //name, Schema, collection

function inserts(data, callback){
	// Department.inser
}

function finds(data, type, callback){
	if (type != 0){
		Department.find(
			{
				active: true,
				$or: [
					{_id: {$regex: '.*' + data + '.*', $options: 'i'}},
					{name: {$regex: '.*' + data + '.*', $options: 'i'}},
					{description: {$regex: '.*' + data + '.*', $options: 'i'}},
					{address: {$regex: '.*' + data + '.*', $options: 'i'}}
				]
			},
			callback(err, departments)
		);
	} else{
		Department.find(
			{
				$or: [
					{_id: {$regex: '.*' + data + '.*', $options: 'i'}},
					{name: {$regex: '.*' + data + '.*', $options: 'i'}},
					{description: {$regex: '.*' + data + '.*', $options: 'i'}},
					{address: {$regex: '.*' + data + '.*', $options: 'i'}}
				]
			},
			callback(err, departments)
		);
	}
};

function updates(data, callback){
	Department.findOneAndUpdate(
		{

		},
		callback(err, departments)
	);
};

function deletes(data, callback){
	Department.findOneAndUpdate(
		{
			_id: data._id
		},
		{
			$set: {active}
		},
		callback(err, departmens)
	);
};

module.exports = {
	Department,
	finds: finds,
	inserts: inserts,
	updates: updates,
	deletes: deletes
}