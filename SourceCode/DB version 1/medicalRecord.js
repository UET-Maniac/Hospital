var arr = [	
	{
		"_id": "REC10000001",
		"doctorId": "DOC10001004",
		"patientId": "PAT10001000",
		"bedNo": "202-3",
		"theDiagnosis": "Gãy tay",
		"status": "Nội trú",
		"treatment": "Bó bột, tránh cử động nhiều",
		"diseaseTypes": ["DT10000001"],
		"medicines": ["MED10000001", "MED10000002"]
	},
	{
		"_id": "REC10000002",
		"doctorId": "DOC10001003",
		"patientId": "PAT10001001",
		"bedNo": "207-5",
		"theDiagnosis": "Gãy chân",
		"status": "Nội trú",
		"treatment": "Bó bột, tránh cử động nhiều",
		"diseaseTypes": ["DT00000001"],
		"medicines": ["MED10000001", "MED10000002"]
	},
	{
		"_id": "REC10000003",
		"doctorId": "DOC10001005",
		"patientId": "PAT10001002",
		"bedNo": "201-3",
		"theDiagnosis": "Gãy cổ",
		"status": "Nội trú",
		"treatment": "Nẹp cổ, cố định vùng chấn thương",
		"diseaseTypes": ["DT10000001"],
		"medicines": ["MED10000001", "MED10000002"]
	},
	{
		"_id": "REC10000004",
		"doctorId": "DOC10001003",
		"patientId": "PAT10001003",
		"bedNo": "207-2",
		"theDiagnosis": "Thoát vị đĩa đệm",
		"status": "Nội trú",
		"treatment": "Điều trị thoái hóa liên tục",
		"diseaseTypes": ["DT10000003"],
		"medicines": ["MED10000005", "MED10000006"]
	},
	{
		"_id": "REC10000005",
		"doctorId": "DOC10001004",
		"patientId": "PAT10001005",
		"bedNo": "211-4",
		"theDiagnosis": "Bỏng",
		"status": "Nội trú",
		"treatment": "Cấy ghép mô, da bị tổn thương",
		"diseaseTypes": ["DT10000005"],
		"medicines": ["MED10000009", "MED10000010"]
	},
	{
		"_id": "REC10000006",
		"doctorId": "DOC10001000",
		"patientId": "PAT10001007",
		"bedNo": "209-3",
		"theDiagnosis": "Đứt dây chằng",
		"status": "Nội trú",
		"treatment": "Nối lại dây chằng",
		"diseaseTypes": ["DT10000004"],
		"medicines": ["MED10000007", "MED10000008"]
	},
	{
		"_id": "REC10000007",
		"doctorId": "DOC10001001",
		"patientId": "PAT10001009",
		"bedNo": "206-3",
		"theDiagnosis": "Gãy cột sống",
		"status": "Nội trú",
		"treatment": "Đóng định cố định cột sống",
		"diseaseTypes": ["DT10000001"],
		"medicines": ["MED10000001", "MED10000002"]
	},
	{
		"_id": "REC10000008",
		"doctorId": "DOC10001002",
		"patientId": "PAT10001008",
		"bedNo": "210-3",
		"theDiagnosis": "Thoái hóa khớp",
		"status": "Nội trú",
		"treatment": "Điều trị tại nhà",
		"diseaseTypes": ["DT10000003"],
		"medicines": ["MED10000005", "MED10000002"]
	},
	{
		"_id": "REC10000009",
		"doctorId": "DOC10001000",
		"patientId": "PAT10001006",
		"bedNo": "207-1",
		"theDiagnosis": "Chấn thương sọ não",
		"status": "Nội trú",
		"treatment": "Phẫu thuật hộp sọ bệnh nhân",
		"diseaseTypes": ["DT10000002"],
		"medicines": ["MED10000003", "MED10000004"]
	},
	{
		"_id": "REC10000010",
		"doctorId": "DOC10001004",
		"patientId": "PAT10001000",
		"bedNo": "208-1",
		"theDiagnosis": "Gãy tay",
		"status": "Nội trú",
		"treatment": "Bó bột, tránh cử động nhiều",
		"diseaseTypes": ["DT10000001"],
		"medicines": ["MED10000001", "MED10000002"]
	}
]	

db.medicine.insert(arr);