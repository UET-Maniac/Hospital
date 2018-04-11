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

var News = mongoose.model('news', news, "news") //name, Schema, collection

function inserts(data, callback){
	
}

function finds(data, callback){
	
}

function updates(data, callback){
	
}

function deletes(data, callback){
	
}

module.exports = {
	finds: finds,
	inserts: inserts,
	updates: updates,
	deletes: deletes
}