var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var tools = require('./tools');
var defaultId = require('../config.json').defaultId.post;
/**
 * Schema bài trao đổi
 */
var Post = new Schema({
    _id: String,
	content: String,
	image: String,
	userId: {type: String, ref: 'User'},
	subPostId:[{type: String, ref: 'Post'}],
    active: Boolean,
    timestamp: Date
})
/**
 * Thêm bài trao đổi
 * @param {*} data 
 * @param {*} callback 
 */
Post.statics.inserts = function(data, callback){
	var query = {};
	tools.Insert(PostModel, query, defaultId, data, callback);
}
/**
 * Tìm bài trao đổi
 * @param {*} data 
 * @param {*} callback 
 */
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
/**
 * Cập nhật bài trao đổi
 * @param {*} data 
 * @param {*} callback 
 */
Post.statics.updates = function(data, callback){
	tools.Update.call(this, data, callback);
}
/**
 * 'Xóa' bài trao đổi
 * @param {*} data 
 * @param {*} callback 
 */
Post.statics.deletes = function(data, callback){
	tools.Delete.call(this, data, callback);
}
/**
 * name, Schema, collection
 */
var PostModel = mongoose.model('Post', Post, "post");
/**
 * Exports
 */
module.exports = PostModel;