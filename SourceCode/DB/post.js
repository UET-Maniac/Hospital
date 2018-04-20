var arr = [
	{
		"_id": "POS10000001",
		"content": "Đây ko phải là bài post",
		"image": "",
		"userId": "USE100000001",
		"sub_id": []
	},
	{
		"_id": "POS10000002",
		"content": "Post cái gì lên cho hợp lí đây",
		"image": "",
		"userId": "USE100000002",
		"sub_id": []
	}
]

db.post.insert(arr);	