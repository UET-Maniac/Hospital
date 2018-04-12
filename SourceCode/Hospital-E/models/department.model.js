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

// module.exports = mongoose.model('Department', Department, "department");

var Departments = mongoose.model('Department', Department, 'department') //name, Schema, collection

// function insertOrUpdate(data, callback){
// 	var data = new Department(data);
// 	data.active = true;
// 	data.timestamp = new Date.now();
// 	Departments.save(callback(err, departmens));
// }

Department.statics.finds = function(data, type, callback){
	if (type != 0){
		Departments.find(
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
		// Departments.find(
		// 	{
		// 		$or: [
		// 			{_id: {$regex: '.*' + data + '.*', $options: 'i'}},
		// 			{name: {$regex: '.*' + data + '.*', $options: 'i'}},
		// 			{description: {$regex: '.*' + data + '.*', $options: 'i'}},
		// 			{address: {$regex: '.*' + data + '.*', $options: 'i'}}
		// 		]
		// 	},
		// 	callback(err, departments)
		// );
		console.log("111111111111111111111111111111");
	}
};

// Department.methods.deletes = (data, callback) => {
// 	return Departments.findByIdAndUpdate(
// 		data,
// 		{
// 			$set: {
// 				active: false,
// 				timestamp: new Date.now()
// 			}
// 		},
// 		callback(err, departmens)
// 	);
// };

module.exports = Departments;