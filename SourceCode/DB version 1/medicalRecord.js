var arr = [	
	{
		"recordId": "REC10000001",
		"doctorId": "DOC10001004",
		"patientId": "PAT10001000",
		"bedNo": "202-3",
		"theDiagnosis": "Gãy tay",
		"status": "",
		"treatment": "Bó bột, tránh cử động nhiều",
		"diseaseTypes": ["DT00000001"],
		"medicines": ["MED00000001", "MED00000002"]
	},
	{
		"recordId": "REC10000002",
		"doctorId": "DOC10001003",
		"patientId": "PAT10001001",
		"bedNo": "207-5",
		"theDiagnosis": "Gãy chân",
		"status": "",
		"treatment": "Bó bột, tránh cử động nhiều",
		"diseaseTypes": ["DT00000001"],
		"medicines": ["MED00000001", "MED00000002"]
	},
	{
		"recordId": "REC10000003",
		"doctorId": "DOC10001005",
		"patientId": "PAT10001002",
		"bedNo": "201-3",
		"theDiagnosis": "Gãy cổ",
		"status": "",
		"treatment": "Nẹp cổ, cố định vùng chấn thương",
		"diseaseTypes": ["DT00000001"],
		"medicines": ["MED00000001", "MED00000002"]
	},
	{
		"recordId": "REC10000004",
		"doctorId": "DOC10001003",
		"patientId": "PAT10001003",
		"bedNo": "207-2",
		"theDiagnosis": "Thoát vị đĩa đệm",
		"status": "",
		"treatment": "Điều trị thoái hóa liên tục",
		"diseaseTypes": ["DT00000003"],
		"medicines": ["MED00000005", "MED00000006"]
	},
	{
		"recordId": "REC10000005",
		"doctorId": "DOC10001004",
		"patientId": "PAT10001005",
		"bedNo": "211-4",
		"theDiagnosis": "Bỏng",
		"status": "",
		"treatment": "Cấy ghép mô, da bị tổn thương",
		"diseaseTypes": ["DT00000005"],
		"medicines": ["MED00000009", "MED00000010"]
	},
	{
		"recordId": "REC10000006",
		"doctorId": "DOC10001000",
		"patientId": "PAT10001007",
		"bedNo": "209-3",
		"theDiagnosis": "Đứt dây chằng",
		"status": "",
		"treatment": "Nối lại dây chằng",
		"diseaseTypes": ["DT00000004"],
		"medicines": ["MED00000007", "MED00000008"]
	},
	{
		"recordId": "REC10000007",
		"doctorId": "DOC10001001",
		"patientId": "PAT10001009",
		"bedNo": "206-3",
		"theDiagnosis": "Gãy cột sống",
		"status": "",
		"treatment": "Đóng định cố định cột sống",
		"diseaseTypes": ["DT00000001"],
		"medicines": ["MED00000001", "MED00000002"]
	},
	{
		"recordId": "REC10000008",
		"doctorId": "DOC10001002",
		"patientId": "PAT10001008",
		"bedNo": "210-3",
		"theDiagnosis": "Thoái hóa khớp",
		"status": "",
		"treatment": "Điều trị tại nhà",
		"diseaseTypes": ["DT00000003"],
		"medicines": ["MED00000005", "MED00000002"]
	},
	{
		"recordId": "REC10000009",
		"doctorId": "DOC10001000",
		"patientId": "PAT10001006",
		"bedNo": "207-1",
		"theDiagnosis": "Chấn thương sọ não",
		"status": "",
		"treatment": "Phẫu thuật hộp sọ bệnh nhân",
		"diseaseTypes": ["DT00000002"],
		"medicines": ["MED00000003", "MED00000004"]
	},
	{
		"recordId": "REC10000010",
		"doctorId": "DOC10001004",
		"patientId": "PAT10001000",
		"bedNo": "208-1",
		"theDiagnosis": "Gãy tay",
		"status": "",
		"treatment": "Bó bột, tránh cử động nhiều",
		"diseaseTypes": ["DT00000001"],
		"medicines": ["MED00000001", "MED00000002"]
	}
]	

db.medicine.insert(arr);