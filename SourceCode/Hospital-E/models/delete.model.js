module.exports = function(data, callback){
	var query = {name: data};
	var update = {
		$set: {
			active: false,
			timestamp: new Date(Date.now())
		}
	}
	this.findOneAndUpdate(query,update,callback);
}

// Chua tim duoc cach truyen 'this' cua thang goi toi vao model