var mongoose = require("mongoose")
var Schema = mongoose.Schema

var rating = new Schema({
    _id: String,
	doctorId: String,
	patientId: String,
	star: Number,
	content: String,
    active: Boolean,
    timestamp: Date
})

var Rating = mongoose.model('rating', rating, "rating");

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

module.exports = {
	inserts: inserts
}