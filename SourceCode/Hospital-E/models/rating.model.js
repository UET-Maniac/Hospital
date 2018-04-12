var mongoose = require("mongoose")
var Schema = mongoose.Schema

var Rating = new Schema({
    _id: String,
	doctorId: String,
	patientId: String,
	star: Number,
	content: String,
    active: Boolean,
    timestamp: Date
})

Rating.statics.inserts = function(data, callback){
	
}

Rating.statics.finds = function(data, callback){
	
}

Rating.statics.updates = function(data, callback){
	
}

Rating.statics.deletes = function(data, callback){
	
}

module.exports = mongoose.model('Rating', rating, "rating");