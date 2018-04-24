var arr = [
	{
		"_id" : "DEP101",
		"name": "Chấn thương chỉnh hình",
		"description": "Thực hiện các việc phẫu thuật, chăm sóc việc gãy tay,gãy chân,...",
		"address": "Khu A1, bệnh viện X",
		"image": "",
		"foundingOn": new Date('1976-06-09')
	},

	{
		"_id" : "DEP102",
		"name": "Mắt",
		"description": "Thực hiện điều trị các bệnh về mắt",
		"address": "Khu A2, bệnh viện X",
		"image": "",
		"foundingOn": new Date('1979-08-25')
	},

	{
		"_id" : "DEP103",
		"name": "Tai-Mũi-Họng",
		"description": "Thực hiện điều trị các bệnh liên quan đến tai, mũi, họng",
		"address": "Khu A3, bệnh viện X",
		"image": "",
		"foundingOn": new Date('1980-04-21')
	},

	{
		"_id" : "DEP104",
		"name": "Ung bướu",
		"description": "Thực hiện khám, điều trị, ngăn ngừa các bệnh ung thư",
		"address": "Khu A4, bệnh viện X",
		"image": "",
		"foundingOn": new Date('1990-04-16')
	},

	{
		"_id" : "DEP105",
		"name": "Da liễu",
		"description": "Thực hiện các chăm sóc da",
		"address": "Khu A5, bệnh viện X",
		"image": "",
		"foundingOn": new Date('1990-12-02')
	}
]

db.department.insert(arr);