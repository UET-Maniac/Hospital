var arr = [
	{
		"_id": "DT10000001",
		"name": "Gãy xương",
		"medicalRecords": ["REC10000001", "REC10000002", "REC10000003", "REC10000007", "REC10000010"]
	},
	{
		"_id": "DT10000002",
		"name": "Chấn thương sọ não",
		"medicalRecords": ["REC10000009"]
	},
	{
		"_id": "DT10000003",
		"name": "Thoái hóa xương khớp",
		"medicalRecords": ["REC10000004", "REC10000008"]
	},
	{
		"_id": "DT10000004",
		"name": "Tổn thương mạch máu, thần kinh",
		"medicalRecords": ["REC10000006"]
	},
	{
		"_id": "DT10000005",
		"name": "Bỏng",
		"medicalRecords": ["REC10000005"]
	}
]

db.diseaseTypes.insert(arr);