var multer = require('multer');
var storage = multer.diskStorage({
  	destination: function(req, file, callback){
		callback(null, 'public/images/datas');
  	},
  	filename: function(req, file, callback){
		// chua xu ly truong hop trungn ten khac loai anh
		var fileName = '';
		if (req.objectType == 0){
			fileName += req.auth.data.userName + '.' + new Date() + '.';
		}
		fileName += req.auth.data._id + file.originalname.substring(
			file.originalname.lastIndexOf('.'), 
			file.originalname.length
		)
		callback(null, fileName);
  	}
});
var fileFilter = function(req, file, callback){
	// reject file
	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'|| file.mimetype === 'image/jpg'){
		callback(null, true);
	} else{
		callback(new Error('File không đúng định dạng hoặc quá cỡ cho phép'), false);
	}
};
var upload = multer({
	storage: storage,
	limits:{
		fileSize: 1024*1024*5
	},
	fileFilter: fileFilter
});

module.exports = upload;