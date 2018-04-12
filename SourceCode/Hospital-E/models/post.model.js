var mongoose = require("mongoose")
var Schema = mongoose.Schema

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
	
}

module.exports = mongoose.model('Post', post, "post")