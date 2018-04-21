var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongoDB = "mongodb://127.0.0.1:27017/test_h"; //uri to database
mongoose.connect(mongoDB);

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
    active: Boolean,
    timestamp: Date
});

var User = mongoose.model('User', userSchema, 'user');
var Department = mongoose.model('Department', departmentSchema, 'department');

// User.find({},(err, results) => {
//     results.forEach((result)=>{
//         console.log(result)
//     })
// })

// User.find({},(err, results) => {
//     User.populate(results, {path: 'departmentId', match: {_id: 'DEP101'}}, (err, resultss) => {
//         resultss.forEach((result)=>{
//             console.log(result)
//         })
//     })
// })

// User.find({})
//     .populate('departmentId')
//     .exec((err, results) => {
//         results.forEach((result)=>{
//             console.log(result)
//         })
//     })
var rs = mongoose.model('rs', new Schema());
User.find({departmentId: {$exists: true}})
    .populate({
		path: 'departmentId',
		// model: 'rs'
	})
    .exec((err, results) => { 
       	// results = results.filter((result)=>{
		//    	if (result.departmentId._id == 'DEP102')
		// 	return result;
		//    })
			// results.find({},(err, rs) => {
			// 	console.log(rs);
			// })
		results.forEach((result)=>{
            console.log(result)
		})
		// rs.find({'departmentId._id' : 'DEP102'}, (err, rss)=>{
		// 	console.log(rss);
		// })
	})

rs.find({'departmentId._id' : 'DEP102'}, (err, rss)=>{
	// rss.forEach((r)=>{
	// 	console.log(r)
	// })
})