var mongoose = require("mongoose")
var Schema = mongoose.Schema

var post = new Schema({
    _id: String,
	content: String,
	image: String,
	userId: String,
	subPostId:Array(String),
    acctive: Boolean,
    timestamp: Date
})

var Post = mongoose.model('post', post, "post") //name, Schema, collection

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