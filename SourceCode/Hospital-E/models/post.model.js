var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var tools = require('./tools.model');

var Post = new Schema({
    _id: String,
	content: String,
	image: String,
	userId: {type: String, ref: 'User'},
	subPostId:[{type: String, ref: 'Post'}],
    active: Boolean,
    timestamp: Date
})

Post.statics.inserts = function(data, callback){
	var query = {};
	var defaultId = '';
	tools.Insert(PostModel, query, defaultId, data, callback);
}

Post.statics.finds = function(data, callback){
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

Post.statics.updates = function(data, callback){
	tools.Update.call(this, data, callback);
}

Post.statics.deletes = function(data, callback){
	tools.Delete.call(this, data, callback);
}

var PostModel = mongoose.model('Post', Post, "post");

module.exports = PostModel;