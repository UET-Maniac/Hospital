var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var tools = require('./tools');
var config = require('../config.json');
var defaultId = config.defaultId.post;
/**
 * Schema bài đăng
 */
var Post = new Schema({
    _id: String,
	tags: [String],
	title: String,
	content: String,
	image: String,
	like: Number,
	authorId: {type: String, ref: 'User'},
	// postType = 0  la new con =1 la post cũ
	postType: Number,
	subPostIds: [String],
    active: Boolean,
    timestamp: Date
})
/**
 * Thêm bài đăng
 * @param {*} data 
 * @param {*} callback 
 */
Post.statics.inserts = function(data, callback){
	var query = {};
	tools.Insert(PostModel, query, defaultId, data, callback);
}
/**
 * Tìm kiếm bài đăng
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
	if (type != config.admin)
		query.active = true;
	this.find(query,callback);
}
/**
 * Cập nhật bài đăng
 * @param {*} data 
 * @param {*} callback 
 */
Post.statics.updates = function(data, callback){
	tools.Update.call(this, data, callback);
}
/**
 * 'Xóa' bài đăng
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