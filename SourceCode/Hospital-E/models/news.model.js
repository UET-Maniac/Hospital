var mongoose = require("mongoose")
var Schema = mongoose.Schema

var news = new Schema({
    newId: String,
	tags: Array(String),
	title: String,
	content: String,
	image: String,
	like: int,
	authorId: String,
    acctive: Boolean,
    timestamp: Date
})

module.exports = mongoose.model('news', news, "news") //name, Schema, collection