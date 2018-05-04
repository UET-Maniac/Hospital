var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var tools = require('./tools');
var config = require('../config.json');
var defaultId = config.defaultId.news;
/**
 * Schema bài đăng
 */
var News = new Schema({
    _id: String,
	tags: [String],
	title: String,
	content: String,
	image: String,
	like: Number,
	authorId: {type: String, ref: 'User'},
    active: Boolean,
    timestamp: Date
})
/**
 * Thêm bài đăng
 * @param {*} data 
 * @param {*} callback 
 */
News.statics.inserts = function(data, callback){
	var query = {};
	tools.Insert(NewsModel, query, defaultId, data, callback);
}
/**
 * Tìm kiếm bài đăng
 * @param {*} data 
 * @param {*} callback 
 */
News.statics.finds = function(data, callback){
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
News.statics.updates = function(data, callback){
	tools.Update.call(this, data, callback);
}
/**
 * 'Xóa' bài đăng
 * @param {*} data 
 * @param {*} callback 
 */
News.statics.deletes = function(data, callback){
	tools.Delete.call(this, data, callback);
}
/**
 * name, Schema, collection
 */
var NewsModel = mongoose.model('News', News, "news");
/**
 * Exports
 */
module.exports = NewsModel;