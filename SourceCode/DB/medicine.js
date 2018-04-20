var arr = [
	{
		"_id": "MED10000001",
		"name": "Cao bó gãy xương",
		"effect": "Tiêu sưng, giảm đau, liền xương",
		"use": "đem dàn thuốc lên giấy dấu dày 3mm vừa đủ bó quanh chỗ xương gẫy, bó vào xung quang chỗ gây, đặt nẹp, băng cố định cho chặt. Khi nơi gây đã ổn định, ba ngày thay thuốc 1 lần.",
		"description": "",
		"medicalRecord": ["REC10000001", "REC10000002", "REC10000003", "REC10000007", "REC10000010"]
	},
	{
		"_id": "MED10000002",
		"name": "Cao bó gãy xương",
		"effect": "Tiêu sưng, giảm đau, liền xương",
		"use": "đem dàn thuốc lên giấy dấu dày 3mm vừa đủ bó quanh chỗ xương gẫy, bó vào xung quang chỗ gây, đặt nẹp, băng cố định cho chặt. Khi nơi gây đã ổn định, ba ngày thay thuốc 1 lần.",
		"description": "",
		"medicalRecord": ["REC10000001", "REC10000002", "REC10000003", "REC10000007", "REC10000010"]
	},
	{
		"_id": "MED10000003",
		"name": "Panadol",
		"effect": "Giảm đau đầu",
		"use": "",
		"description": "",
		"medicalRecord": ["REC10000009"]
	},
	{
		"_id": "MED10000004",
		"name": "Valprat natri",
		"effect": "Chống động thần kinh, an thần",
		"use": "",
		"description": "",
		"medicalRecord": ["REC10000009"]
	},
	{
		"_id": "MED10000005",
		"name": "Viêm xương khớp cây đa",
		"effect": "Điều trị, làm chậm quá trình thoái hóa xương khớp",
		"use": "",
		"description": "",
		"medicalRecord": ["REC10000004", "REC10000008"]
	},
	{
		"_id": "MED10000006",
		"name": "Viêm khớp Tâm Bình",
		"effect": "Điều trị, làm chậm quá trình thoái hóa xương khớp",
		"use": "",
		"description": "",
		"medicalRecord": ["REC10000004", "REC10000008"]
	},
	{
		"_id": "MED10000007",
		"name": "CumarGold",
		"effect": "Chữa bỏng, ngăn ngừa nhiễm trùng",
		"use": "",
		"description": "",
		"medicalRecord": ["REC10000005"]
	},
	{
		"_id": "MED10000008",
		"name": "CumarSilver",
		"effect": "Chữa bỏng, ngăn ngừa nhiễm trùng",
		"use": "",
		"description": "",
		"medicalRecord": ["REC10000005"]
	},
	{
		"_id": "MED10000009",
		"name": "CumarBronze",
		"effect": "Chữa bỏng, ngăn ngừa nhiễm trùng",
		"use": "",
		"description": "",
		"medicalRecord": ["REC10000005"]
	},
	{
		"_id": "MED10000010",
		"name": "CumarPlatinum",
		"effect": "Chữa bỏng, ngăn ngừa nhiễm trùng",
		"use": "",
		"description": "",
		"medicalRecord": ["REC10000005"]
	}
]

db.medicine.insert(arr);	