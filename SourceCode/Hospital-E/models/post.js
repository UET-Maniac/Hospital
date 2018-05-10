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
			{postType: search}
		]
	}
	var lookupUser = {
		$lookup:{
			from: 'user',
			localField: 'authId',
			foreignField: '_id',
			as: 'auth'
		}

	}
	var match = {
		$match: {
			$or: [
				{_id: search},
				{name: search},
				{card: search},
				{phoneNumber: search},
				{userName: search},
				{address: search},
				{level: search},
				{experience: search}
			]
		}
	}
	if (objectType != config.admin){
		match['$match'].active = true;
	}
	this.aggregate([lookupUser,match]).sort({_id: 1}).exec(callback);
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