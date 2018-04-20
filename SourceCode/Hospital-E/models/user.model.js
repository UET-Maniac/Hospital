var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var tools = require('./tools.model');
// can lay secrectKey va timeExpires trong config
var timeExpires  = 3600*1000;

var User = new Schema({
    _id: String,
	name: String,
	card: String,
	phoneNumber: String,
	birthday: Date,
	sex: Boolean,
	address: String,
	image: String,
	userName: String,
	password: String,
	doctor:
	{
		level: String,
		experience: String,
		star: Number,
		departmentId: String,
		dean: Boolean
	},
	admin: Boolean,
    active: Boolean,
    timestamp: Date
})


// 0-> admin, 1->doctor, 2->user
User.statics.inserts = function(data, callback){
	// Điều kiện tìm kiếm 
	// var query = { name : data.name };
	// var defaultId = '';
	// model, query, defaultId, data, callback
	tools.Insert(UserModel, query, defaultId, data, callback);
}

User.statics.finds = function(data, type, callback){
	var search = {$regex: '.*' + data + '.*', $options: 'i'};
	var query = {
		$or: [
			// {_id: search},
			// {name: search},
			// {description: search},
			// {address: search}
		]
	}
	if (type != 0)
		query.active = true;
	this.find(query,callback);
}

User.statics.updates = function(data, type, callback){
	tools.Update.call(this, data, callback);
}

User.statics.deletes = function(data, callback){
	tools.Delete.call(this, data, callback);
}

User.statics.login = function(data, callback){
	var query = {
		userName: data.userName,
		password: data.password
	}
	this.findOne(query,callback);
}

User.statics.checkToken = function(data, callback){
	var query = {
		token: data.token,
		expiresAt: {$gt : new Date()}
	}
	this.findOne(query, callback);
}

User.statics.updateToken = function(data, callback){
	var query = data._id;
	var update = {
		$set: {
			token: data.token,
			// do dinh dang cua jwt exp la s chu khong phai mili s
			expiresAt: new Date(Date.now() + timeExpires),
			timestamp: new Date()
		}
	}
	this.findByIdAndUpdate(query,update,callback);
}

var UserModel = mongoose.model('User', User, "user");

module.exports = UserModel;