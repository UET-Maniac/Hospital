var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var config = require('./config.json');
mongoose.connect(config.db);

var userSchema = new Schema({
    _id: String,
	name: String,
	card: String,
	phoneNumber: String,
	birthday: Date,
	sex: Boolean,
	address: String,
	image: String,
	userName: String,
	password: String,
	objectType: Number,
	level: String,
	experience: String,
	star: Number,
	departmentId: {type: String, ref: 'Department'},
	dean: Boolean,
    active: Boolean,
    timestamp: Date
})

var departmentSchema = new Schema({
	_id: String,
    name: String,
	description: String,
	address: String,
	image: String,
	foundingOn: Date,
	doctorIds: [{type: String, ref: 'User'}],
    active: Boolean,
    timestamp: Date
});

var medicalRecordSchema = new Schema({
    _id: String,
	doctorId: {type: String, ref: 'User'},
	patientId: {type: String, ref: 'User'},
	bedNo: String,
	theDiagnosis: String,
	status: String,
	treatment: String,
	diseaseTypes: [{type: String, ref: 'DiseaseType'}],
	medicines:[{type: String, ref: 'Medicine'}],
    active: Boolean,
    timestamp: Date
})

var diseaseTypeSchema = new Schema({
    _id: String,
	name: String,
	medicalRecords: [{type: String, ref: 'MedicalRecord'}],
    active: Boolean,
    timestamp: Date
})

var medicineSchema = new Schema({
    _id: String,
	name: String,
	effect: String,
	use: {type: String, ref: 'User'},
	description: String,
	medicalRecords: [{type: String, ref: 'MedicalRecord'}],
    active: Boolean,
    timestamp: Date
})

var  appointmentScheduleSchema = new Schema({
    _id: String,
	doctorId: {type: String, ref: 'User'},
	patientId: {type: String, ref: 'User'},
	time: Date,
	address: String,
	description: String,
	acceptance: Boolean,
    active: Boolean,
    timestamp: Date
})

var User = mongoose.model('User', userSchema, 'user');
var Department = mongoose.model('Department', departmentSchema, 'department');
var MedicalRecord = mongoose.model('medicalRecord', medicalRecordSchema, 'medicalRecord');
var Medicine = mongoose.model('Medicine', medicineSchema, 'medicine');
var DiseaseType = mongoose.model('DiseaseType', diseaseTypeSchema, 'diseaseType');
var AppointmentSchedule = mongoose.model('AppointmentSchedule', appointmentScheduleSchema, 'appointmentSchedule');

// Department.find({_id: 'DEP101', active: true})
// 	.select('_id')
// 	.select('name')
// 	.select('doctorIds')
// 	.exec((err, results) => {
// 		Department.populate(results, {path: 'doctorIds', select: {'_id': 1, 'name': 1}}, (err, resultss) => {
// 			resultss.forEach((result)=>{
// 				console.log(result)
// 			})
// 		})
// 	})

// Department.find({})
// 	.select('_id')
// 	.select('name')
// 	.select('doctorIds')
// 	.populate('doctorIds')
// 	.exec((err, results) => {
// 		Department.populate(results, {path: 'doctorIds', select: {'_id': 1, 'name': 1}}, (err, resultss) => {
// 			results.forEach((result)=>{
// 				console.log(result)
// 			})
// 		})
// 	})

// MedicalRecord.find()
// 	.populate('patientId')
// 	.populate('doctorId')
// 	.populate('diseaseTypes')
// 	.populate('medicines')
// 	.exec((err, results) => {
//         results.forEach((result)=>{
//             console.log(result)
//         })
//     })

// User.find({},(err, results) => {
//     results.forEach((result)=>{
//         console.log(result)
//     })
// })

// Department.find({},(err, results) => {
//     User.populate(results, {path: 'departmentId'}, (err, resultss) => {
//         resultss.forEach((result)=>{
//             console.log(result)
//         })
//     })
// })

// User.find({objectType: 1})
//     .populate({path: 'departmentId', model: 'Department'})
//     .exec((err, results) => {
//         results.forEach((result)=>{
//             console.log(result)
//         })
//     })
// var rs = mongoose.model('rs', new Schema());
// User.find({departmentId: {$exists: true}})
//     .populate({
// 		path: 'departmentId',
// 		// model: 'rs'
// 	})
//     .exec((err, results) => { 
//        	// results = results.filter((result)=>{
// 		//    	if (result.departmentId._id == 'DEP102')
// 		// 	return result;
// 		//    })
// 			// results.find({},(err, rs) => {
// 			// 	console.log(rs);
// 			// })
// 		results.forEach((result)=>{
//             console.log(result)
// 		})
// 		// rs.find({'departmentId._id' : 'DEP102'}, (err, rss)=>{
// 		// 	console.log(rss);
// 		// })
// 	})

// rs.find({'departmentId._id' : 'DEP102'}, (err, rss)=>{
// 	// rss.forEach((r)=>{
// 	// 	console.log(r)
// 	// })
// })
// var date = "13-04-2018";
// var newdate = date.split("-").reverse().join("-");
// console.log(new Date("2018-02-28 9:00"))

// var search = {$regex: '.*' + 'USE100000012' + '.*', $options: 'i'};
// AppointmentSchedule.find({})
// 	.populate({path: 'doctorId'})
// 	.populate({path: 'patientId:', match: { _id: 'USE100000026'}})
// 	.exec((err, result)=>{
// 		if (!err && !result.length){
// 			result = result.filter((element)=>{
// 				if (element.doctorId) return element;
// 			})
// 			result.forEach(element=>{
// 				console.log(element)
// 			})
// 		}else
// 			console.log('Loois')
// 	})

// Department.aggregate([
// 	{
// 		$lookup:{
// 			from: 'user',
// 			localField: '_id',
// 			foreignField: 'departmentId',
// 			as: 'test'
// 		}
// 	}
// ]).exec((err, result)=>{
// 	result.forEach(element=>{
// 		console.log(element)
// 	})
// })

var match = {
	$match: {
		t: 1,
		$or: [{a: 1}]
	}
}
match['$match'].t = 4
match['$match']['$or'].push({b: 2},{c: 3})
console.log(match['$match'])

///update({},{$set: {active: true, timestamp: new Date()}},{multi: true})


// var cur = db.rating.aggregate([ 
//     { "$group":
//         { 
//             "_id": "$doctorId", 
//             "starTB": { "$avg": "$star" } 
//         } 
//     }
// ]);

// // Iterate through results and update average grade for each truck.
// while (cur.hasNext()) {
//     var doc = cur.next();
//     db.user.update({ "_id": doc._id },
//                   { "$set": { "star": doc.starTB }});
// }