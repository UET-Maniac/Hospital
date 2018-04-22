var express = require('express');
var router = express.Router();
var User = require("../../models/user.model");
var objectType = 0;
var typeFind = 0;
// chua toi uu, nen cho vao file middle ware
// chua bao mat tot
router.use(function(req, res, next){
	if(req.objectType){
	objectType = req.objectType;
	}
	// objectType = req.headers['objecttype'];
	next();
})

router.route('/')
	.get(function(req, res, next){
	User.finds('', objectType, typeFind, (err, users) => {
		// can them dieu kiem kiem tra xem co kq hay khong de  bat truong hop ko loi va ko co kq
		if (err || !users.length){
		res.status('404').json({
			message: "Can't find data suitable with this request!"
		})
		} else{
			// users.forEach(element => {
			// 	console.log(element);
			// });
		res.render('pages/informationAllUser', {users: users, objectType: objectType});
		}
	});
	})
	.put(function(req, res, next){
	var data = '';
	if (req.body.data) data = req.body.data;
	User.finds(data, objectType, typeFind, (err, users) => {
		if (err || !users.length){
		res.status('404').json({
			message: "Can't find data suitable with this request!"
		})
		} else{
		console.log()
		res.render('pages/informationAllUser', {users: users, objectType: objectType});
		}
	});
	})
	// .post(function(req, res, next){
	//     // chưa kiểm tra điều kiện là admin 
	//     User.inserts(req.body.data, (err, Users) => {
	//         if (err){
	//             res.status('409').json({
	//                 message: "Data exited!"
	//             })
	//         } else{
	//             // render to information
	//             res.send("thanhcong");
	//         }
	//     });
	// })
	// .patch(function(req, res, next){
	//     // chưa kiểm tra điều kiện là admin 
	//     User.updates(req.body.data, (err, Users) => {
	//         if (err){
	//             res.status('500').json({
	//                 message: "Error with server!"
	//             })
	//         } else{
	//             // render to information
	//             res.send("thanhcong");
	//         }
	//     });
	// })
	// .delete(function(req, res, next){
	//     // chưa kiểm tra điều kiện là admin 
	//     User.deletes(req.body.data._id, (err, Users) => {
	//         if (err){
	//             res.status('500').json({
	//                 message: "Error with server!"
	//             })
	//         } else{
	//             // render to information
	//             res.send("thanhcong");
	//         }
	//     });
	// })

module.exports = router;