var express = require('express');
var router = express.Router();
var Doctor = require("../../models/user.model");
var objectType = 2;
var typeFind = 1;
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
    Doctor.finds('', objectType, typeFind, (err, doctors) => {
      // can them dieu kiem kiem tra xem co kq hay khong de  bat truong hop ko loi va ko co kq
      if (err || !doctors.length){
        res.status('404').json({
          message: "Can't find data suitable with this request!"
        })
      } else{
        console.log(doctors[0]);
        res.render('pages/informationDoctor', {doctors: doctors, objectType: objectType});
      }
    });
  })
  .put(function(req, res, next){
    var data = '';
    if (req.body.data) data = req.body.data;
    Doctor.finds(data, objectType, typeFind, (err, doctors) => {
      if (err || !doctors.length){
        res.status('404').json({
          message: "Can't find data suitable with this request!"
        })
      } else{
        console.log()
        res.render('pages/informationDoctor', {doctors: doctors, objectType: objectType});
      }
    });
  })
  // .post(function(req, res, next){
  //     // chưa kiểm tra điều kiện là admin 
  //     Doctor.inserts(req.body.data, (err, doctors) => {
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
  //     Doctor.updates(req.body.data, (err, doctors) => {
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
  //     Doctor.deletes(req.body.data._id, (err, doctors) => {
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