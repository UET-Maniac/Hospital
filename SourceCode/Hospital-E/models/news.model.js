var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var tools = require('./tools.model');

var News = new Schema({
    _id: String,
	tags: Array(String),
	title: String,
	content: String,
	image: String,
	like: Number,
	authorId: String,
    active: Boolean,
    timestamp: Date
})

News.statics.inserts = function(data, callback){
	var query = {};
	var defaultId = '';
	tools.Insert(NewsModel, query, defaultId, data, callback);
}
News.statics.finds = function(data, callback){
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

News.statics.updates = function(data, callback){
	tools.Update.call(this, data, callback);
}

News.statics.deletes = function(data, callback){
	tools.Delete.call(this, data, callback);
}

var NewsModel = mongoose.model('News', news, "news");

module.exports = NewsModel;