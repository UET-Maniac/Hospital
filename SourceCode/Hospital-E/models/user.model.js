var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var tools = require('./tools.model');

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
		departmentName: String,
		dean: Boolean
	},
	admin: Boolean,
    active: Boolean,
    timestamp: Date
})


// 0-> admin, 1->doctor, 2->user
User.statics.inserts = function(data, type, callback){
	if(type = 0){

	}
	else if(type = 1){

	}
	else{

	}
}

User.statics.finds = function(data, type, callback){
	if(type = 0){

	}
	else if(type = 1){

	}
	else{

	}
}

User.statics.updates = function(data, type, callback){
	if(type = 0){

	}
	else if(type = 1){

	}
	else{

	}
}

User.statics.deletes = function(data, callback){
	tools.Delete.call(this, data, callback);
}

var UserModel = mongoose.model('User', user, "user");

module.exports = UserModel;