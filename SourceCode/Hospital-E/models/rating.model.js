var mongoose = require("mongoose")
var Schema = mongoose.Schema

var rating = new Schema({
    ratingId: String,
	doctorId: String,
	patientId: String,
	star: Int32Array,
	content: String,
    acctive: Boolean,
    timestamp: Date
})

module.exports = mongoose.model('rating', rating, "rating") //name, Schema, collection