var arr = [	
	{
		"_id": "REC10000001",
		"doctorId": "USE100000004",
		"patientId": "PAT100000000",
		"bedNo": "202-3",
		"theDiagnosis": "Gãy tay",
		"status": "Nội trú",
		"treatment": "Bó bột, tránh cử động nhiều",
		"diseaseTypes": ["DT10000001"],
		"medicines": ["MED10000001", "MED10000002"]
	},
	{
		"_id": "REC10000002",
		"doctorId": "USE100000003",
		"patientId": "PAT100000001",
		"bedNo": "207-5",
		"theDiagnosis": "Gãy chân",
		"status": "Nội trú",
		"treatment": "Bó bột, tránh cử động nhiều",
		"diseaseTypes": ["DT00000001"],
		"medicines": ["MED10000001", "MED10000002"]
	},
	{
		"_id": "REC10000003",
		"doctorId": "USE100000005",
		"patientId": "PAT100000002",
		"bedNo": "201-3",
		"theDiagnosis": "Gãy cổ",
		"status": "Nội trú",
		"treatment": "Nẹp cổ, cố định vùng chấn thương",
		"diseaseTypes": ["DT10000001"],
		"medicines": ["MED10000001", "MED10000002"]
	},
	{
		"_id": "REC10000004",
		"doctorId": "USE100000003",
		"patientId": "PAT100000003",
		"bedNo": "207-2",
		"theDiagnosis": "Thoát vị đĩa đệm",
		"status": "Nội trú",
		"treatment": "Điều trị thoái hóa liên tục",
		"diseaseTypes": ["DT10000003"],
		"medicines": ["MED10000005", "MED10000006"]
	},
	{
		"_id": "REC10000005",
		"doctorId": "USE100000004",
		"patientId": "PAT100000005",
		"bedNo": "211-4",
		"theDiagnosis": "Bỏng",
		"status": "Nội trú",
		"treatment": "Cấy ghép mô, da bị tổn thương",
		"diseaseTypes": ["DT10000005"],
		"medicines": ["MED10000009", "MED10000010"]
	},
	{
		"_id": "REC10000006",
		"doctorId": "USE100000003",
		"patientId": "PAT100000007",
		"bedNo": "209-3",
		"theDiagnosis": "Đứt dây chằng",
		"status": "Nội trú",
		"treatment": "Nối lại dây chằng",
		"diseaseTypes": ["DT10000004"],
		"medicines": ["MED10000007", "MED10000008"]
	},
	{
		"_id": "REC10000007",
		"doctorId": "USE100000001",
		"patientId": "PAT100000009",
		"bedNo": "206-3",
		"theDiagnosis": "Gãy cột sống",
		"status": "Nội trú",
		"treatment": "Đóng định cố định cột sống",
		"diseaseTypes": ["DT10000001"],
		"medicines": ["MED10000001", "MED10000002"]
	},
	{
		"_id": "REC10000008",
		"doctorId": "USE100000002",
		"patientId": "PAT100000008",
		"bedNo": "210-3",
		"theDiagnosis": "Thoái hóa khớp",
		"status": "Nội trú",
		"treatment": "Điều trị tại nhà",
		"diseaseTypes": ["DT10000003"],
		"medicines": ["MED10000005", "MED10000002"]
	},
	{
		"_id": "REC10000009",
		"doctorId": "USE100000001",
		"patientId": "PAT100000006",
		"bedNo": "207-1",
		"theDiagnosis": "Chấn thương sọ não",
		"status": "Nội trú",
		"treatment": "Phẫu thuật hộp sọ bệnh nhân",
		"diseaseTypes": ["DT10000002"],
		"medicines": ["MED10000003", "MED10000004"]
	},
	{
		"_id": "REC10000010",
		"doctorId": "USE100000004",
		"patientId": "PAT100000000",
		"bedNo": "208-1",
		"theDiagnosis": "Gãy tay",
		"status": "Nội trú",
		"treatment": "Bó bột, tránh cử động nhiều",
		"diseaseTypes": ["DT10000001"],
		"medicines": ["MED10000001", "MED10000002"]
	}
]	

db.medicine.insert(arr);