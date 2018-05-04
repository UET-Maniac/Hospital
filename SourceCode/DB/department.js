var arr = [
	{
		"_id" : "DEP101",
		"name": "Chấn thương chỉnh hình",
		"description": "Thực hiện các việc phẫu thuật, chăm sóc việc gãy tay,gãy chân,...",
		"address": "Khu A1, bệnh viện X",
		"image": "/images/datas/DEP101.jpg",
		"foundingOn": new Date('1976-06-09'),
		"doctorIds": ["USE100000001","USE100000002","USE100000003","USE100000004","USE100000005"]
	},

	{
		"_id" : "DEP102",
		"name": "Mắt",
		"description": "Thực hiện điều trị các bệnh về mắt",
		"address": "Khu A2, bệnh viện X",
		"image": "/images/datas/DEP102.jpg",
		"foundingOn": new Date('1979-08-25'),
		"doctorIds": ["USE100000006","USE100000007","USE100000008","USE100000009","USE100000010"]
	},

	{
		"_id" : "DEP103",
		"name": "Tai-Mũi-Họng",
		"description": "Thực hiện điều trị các bệnh liên quan đến tai, mũi, họng",
		"address": "Khu A3, bệnh viện X",
		"image": "/images/datas/DEP103.jpg",
		"foundingOn": new Date('1980-04-21'),
		"doctorIds": ["USE100000011","USE100000012","USE100000013","USE100000014","USE100000015"]
	},

	{
		"_id" : "DEP104",
		"name": "Ung bướu",
		"description": "Thực hiện khám, điều trị, ngăn ngừa các bệnh ung thư",
		"address": "Khu A4, bệnh viện X",
		"image": "/images/datas/DEP104.jpg",
		"foundingOn": new Date('1990-04-16'),
		"doctorIds": ["USE100000016","USE100000017","USE100000018","USE100000019","USE100000020"]
	},

	{
		"_id" : "DEP105",
		"name": "Da liễu",
		"description": "Thực hiện các chăm sóc da",
		"address": "Khu A5, bệnh viện X",
		"image": "/images/datasDEP105.jpg",
		"foundingOn": new Date('1990-12-02'),
		"doctorIds": ["USE100000021","USE100000022","USE100000023","USE100000024","USE100000025"]
	}
]

db.department.insert(arr);