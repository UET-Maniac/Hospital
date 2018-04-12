var mongoose = require("mongoose")
var Schema = mongoose.Schema

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
	if (type != 0){
		this.find(
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
		this.find(
			{
				$or: [
					{_id: {$regex: '.*' + data + '.*', $options: 'i'}},
					{name: {$regex: '.*' + data + '.*', $options: 'i'}},
					{description: {$regex: '.*' + data + '.*', $options: 'i'}},
					{address: {$regex: '.*' + data + '.*', $options: 'i'}}
				]
			},
			callback
		);
	}
};

Department.methods.deletes = (data, callback) => {
	this.findByIdAndUpdate(
		data,
		{
			$set: {
				active: false,
				timestamp: new Date.now()
			}
		},
		callback
	);
};

module.exports = mongoose.model('Department', Department, 'department')
//name, Schema, collection