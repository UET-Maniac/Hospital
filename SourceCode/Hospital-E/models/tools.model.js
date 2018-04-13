// symbol of entity
var lengthSymbol = 3;

function createNewId(latestId){
    var symbol = latestId.substr(0, lengthSymbol);
    var numberNew  = latestId.substr(lengthSymbol, latestId.length)*1 + 1;
    var idNew = symbol + numberNew;
    return idNew;
}

// all 'this' is used for model reference

function Update(data, callback){
	data.active = true;
	data.timestamp = new Date(Date.now());
	var query = data._id;
	var update = { $set: data };
	this.findByIdAndUpdate(query, update, callback);
}

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
	            data.timestamp = new Date(Date.now());
				model.create(data, callback);
			})
		}else{
			callback('Data exited', null);
		}
	})
}

function Delete(data, callback){
	var query = data._id;
	var update = {
		$set: {
			active: false,
			timestamp: new Date(Date.now())
		}
	}
	this.findByIdAndUpdate(query,update,callback);
}

module.exports = {
    Update: Update,
    Insert: Insert,
    Delete: Delete
}