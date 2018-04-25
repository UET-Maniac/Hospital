/**
 * symbol of entity
 */
var lengthSymbol = 3;
/**
 * Tạo id mới cho thực thể
 * @param {string} latestId _id mới nhất
 */
function createNewId(latestId){
    var symbol = latestId.substr(0, lengthSymbol);
    var numberNew  = latestId.substr(lengthSymbol, latestId.length)*1 + 1;
    var idNew = symbol + numberNew;
    return idNew;
}
/**
 * Update tất cả các thuộc tính của 1 đối tượng
 * @param {string} data dữ liệu với form của đối tượng 
 * @param {function} callback hàm call back
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
 * @param {string} data _id của đối tượng 
 * @param {object} add query cho update 
 * @param {function} callback hàm call back
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
 * @param {model} model schemal model truyền vào 
 * @param {object} query điều kiện để check tránh trùng lặp dữ liệu
 * @param {string} defaultId _id mặc định của đối tượng tránh trường hợp ko có dữ liệu 
 * @param {object} data dữ liệu theo form của đối tượng 
 * @param {function} callback hàm call back
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
			callback(err, null);
		}
	})
}
/**
 * 'Xóa' 1 đối tượng (cho active = false)
 * @param {string} data _id của đối tượng 
 * @param {function} callback hàm call back
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
/**
 * Exports
 */
module.exports = {
    Update: Update,
    Insert: Insert,
    Delete: Delete
}