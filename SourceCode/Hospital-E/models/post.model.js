var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Delete = require('./delete.model');

var Post = new Schema({
    _id: String,
	content: String,
	image: String,
	userId: String,
	subPostId:Array(String),
    active: Boolean,
    timestamp: Date
})

Post.statics.inserts = function(data, callback){
	
}

Post.statics.finds = function(data, callback){
	
}

Post.statics.updates = function(data, callback){
	
}

Post.statics.deletes = function(data, callback){
	Delete.call(this, data, callback);
}

module.exports = mongoose.model('Post', post, "post")