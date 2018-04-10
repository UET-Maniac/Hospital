var mongoose = require("mongoose")
var Schema = mongoose.Schema

var post = new Schema({
    postId: String,
	content: String,
	image: String,
	userId: String,
	subPostId:Array(String),
    acctive: Boolean,
    timestamp: Date
})

module.exports = mongoose.model('post', post, "post") //name, Schema, collection