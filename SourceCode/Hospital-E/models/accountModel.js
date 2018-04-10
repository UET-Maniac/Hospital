var mongoose = require("mongoose")
var Schema = mongoose.Schema

var Account = new Schema({
    email: String,
    pass: String,
    author: { read: Boolean, edit: Boolean, delete: Boolean },
    name: String
})

module.exports = mongoose.model('User', Account, "account") //name, Schema, collection