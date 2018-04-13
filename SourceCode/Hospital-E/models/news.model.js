var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Delete = require('./delete.model');

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
	
}
News.statics.finds = function(data, callback){
	
}

News.statics.updates = function(data, callback){
	
}

News.statics.deletes = function(data, callback){
	Delete.call(this, data, callback);
}

module.exports = mongoose.model('News', news, "news")