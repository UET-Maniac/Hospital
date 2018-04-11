var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var user = new Schema({
    userId: String,
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
		star: Int32Array,
		departmentName: String,
		dean: Boolean
	},
	admin: Boolean,
    acctive: Boolean,
    timestamp: Date
})

var User = mongoose.model('user', user, "user");

// 0-> admin, 1->doctor, 2->user
function inserts(data, type, callback){
	if(type = 0){

	}
	else if(type = 1){

	}
	else{

	}
}

function finds(data, type, callback){
	if(type = 0){

	}
	else if(type = 1){

	}
	else{

	}
}

function updates(data, type, callback){
	if(type = 0){

	}
	else if(type = 1){

	}
	else{

	}
}

function deletes(data, callback){
	
}

module.exports = {
	finds: finds,
	inserts: inserts,
	updates: updates,
	deletes: deletes
}