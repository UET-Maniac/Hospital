var multer = require('multer');
var storage = multer.diskStorage({
  	destination: function(req, file, callback){
		callback(null, 'public/images/datas');
  	},
  	filename: function(req, file, callback){
        // chua chinh duoc ten file
		// chua xu ly truong hop trungn ten khac loai anh
		console.log(req)
		callback(null, req.body._id
			+ file.originalname.substring(
				file.originalname.lastIndexOf('.'), 
				file.originalname.length
			)
		);
  	}
});
var fileFilter = function(req, file, callback){
	// reject file
	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
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