// symbol of entity
var lengthSymbol = 3;
/**
 * Tạo id mới cho thực thể
 * @param {*} latestId _id mới nhất
 */
function createNewId(latestId){
    var symbol = latestId.substr(0, lengthSymbol);
    var numberNew  = latestId.substr(lengthSymbol, latestId.length)*1 + 1;
    var idNew = symbol + numberNew;
    return idNew;
}
// all 'this' is used for model reference
/**
 * Update tất cả các thuộc tính của 1 đối tượng
 * @param {*} data dữ liệu với form của đối tượng 
 * @param {*} callback hàm call back
 */
function Update(data, callback){
	data.active = true;
	data.timestamp = new Date();
	var query = data._id;
	var update = { $set: data };
	this.findByIdAndUpdate(query, update, callback);
}
/**
 * Với những đối tượng có các array tham chiếu đến thực thể khác
 * Thêm 1 tham chiếu và mảng đó 
 * @param {*} data _id của đối tượng 
 * @param {*} add query cho update 
 * @param {*} callback hàm call back
 */
function addIntoArray(data, add, callback){
	data.active = true;
	data.timestamp = new Date();
	var query = data;
	var update = { $push: add };
	this.findByIdAndUpdate(query, update, callback);
}
/**
 * Thêm 1 đối tượng  (tìm kiếm xem dữ liệu đã tồn tại hay chưa rồi mới thêm)
 * @param {*} model schemal model truyền vào 
 * @param {*} query điều kiện để check tránh trùng lặp dữ liệu
 * @param {*} defaultId _id mặc định của đối tượng tránh trường hợp ko có dữ liệu 
 * @param {*} data dữ liệu theo form của đối tượng 
 * @param {*} callback hàm call back
 */
function Insert(model, query, defaultId, data, callback){
	model.findOne(query, function(err, result){
		if (!result){
			model.aggregate([
				{ $sort: {_id: -1} },
    			{ $limit : 1 }
			],function(err, result){
				var idNew = defaultId;
				if(result) idNew = createNewId(result[0]._id);
                data._id = idNew;
                data.active = true;
	            data.timestamp = new Date();
				model.create(data, callback);
			})
		}else{
			callback('Data exited', null);
		}
	})
}
/**
 * 'Xóa' 1 đối tượng (cho active = false)
 * @param {*} data _id của đối tượng 
 * @param {*} callback hàm call back
 */
function Delete(data, callback){
	var query = data;
	var update = {
		$set: {
			active: false,
			timestamp: new Date()
		}
	}
	this.findByIdAndUpdate(query,update,callback);
}

module.exports = {
    Update: Update,
    Insert: Insert,
    Delete: Delete
}