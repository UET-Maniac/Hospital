var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var tools = require('./tools.model');

var Department = new Schema({
	// Do các thao tác với CSDl sử dụng trong model nên tôi thấy các thuộc tính hơi thừa 
	_id: String,
    name: String,
	description: String,
	address: String,
	image: String,
	foundingOn: Date,
    active: Boolean,
    timestamp: Date
});

Department.statics.inserts = function(data, callback){
	// Điều kiện tìm kiếm 
	var query = { name : data.name };
	var defaultId = 'DEP101';
	// model, query, defaultId, data, callback
	tools.Insert(DepartmentModel, query, defaultId, data, callback);
}

// Phần này vẫn chưa tối ưu đc
// type 0, còn lại là người dùng khác 
Department.statics.finds = function(data, objectType, callback){
	var search = {$regex: '.*' + data + '.*', $options: 'i'};
	var query = {
		$or: [
			{_id: search},
			{name: search},
			{description: search},
			{address: search}
		]
	}
	if (objectType != 0)
		query.active = true;
	this.find(query,callback);
};

Department.statics.updates = function(data, callback){
	// Do sử dụng 'this' nên phải call để tham chiếu đến model
	// nếu không dùng cái này thì thêm 1 biến model rồi truyền model vào 
	tools.Update.call(this, data, callback);
}

Department.statics.deletes = function(data, callback){
	tools.Delete.call(this, data, callback);
}
var DepartmentModel = mongoose.model('Department', Department, 'department');

module.exports = DepartmentModel;
//name, Schema, collection