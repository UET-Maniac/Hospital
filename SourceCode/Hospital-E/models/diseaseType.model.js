var mongoose = require("mongoose")
var Schema = mongoose.Schema;
var Delete = require('./delete.model');

var DiseaseType = new Schema({
    _id: String,
	name: String,
	medicalRecords: Array(String),
    active: Boolean,
    timestamp: Date
})

DiseaseType.statics.inserts = function(data, callback){
	
}

DiseaseType.statics.finds = function(data, callback){
	this.find(
        {
            $or: [
                {_id: {$regex: '.*' + data + '.*', $options: 'i'}},
                {name: {$regex: '.*' + data + '.*', $options: 'i'}}
                // Chua tim trong medicalRecord
            ]
        },
        callback
    );
}

DiseaseType.statics.updates = function(data, callback){
	
}

DiseaseType.statics.deletes = function(data, callback){
	Delete.call(this, data, callback);
}

module.exports = mongoose.model('DiseaseType', diseaseType, "diseaseType")