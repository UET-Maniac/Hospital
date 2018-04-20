var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var tools = require('./tools.model');

var Rating = new Schema({
    _id: String,
	doctorId: {type: String, ref: 'User'},
	patientId: {type: String, ref: 'User'},
	star: Number,
	content: String,
    active: Boolean,
    timestamp: Date
})

Rating.statics.inserts = function(data, callback){
	var query = {};
	var defaultId = '';
	tools.Insert(RatingModel, query, defaultId, data, callback);
}

Rating.statics.finds = function(data, callback){
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

Rating.statics.updates = function(data, callback){
	tools.Update.call(this, data, callback);
}

Rating.statics.deletes = function(data, callback){
	tools.Delete.call(this, data, callback);
}

var  RatingModel = mongoose.model('Rating', Rating, "rating");

module.exports = RatingModel;