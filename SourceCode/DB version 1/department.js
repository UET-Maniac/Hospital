var arr = [
	{
		"departmentId" : "DEP10001",
		"name": "Chấn thương chỉnh hình",
		"description": "Thực hiện các việc phẫu thuật, chăm sóc việc gãy tay,gãy chân,...",
		"address": "Khu A1, bệnh viện X",
		"image": "",
		"foundingOn": new Date('1998-01-01')
	}
]

db.department.insert(arr);