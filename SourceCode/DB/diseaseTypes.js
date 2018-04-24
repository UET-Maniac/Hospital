var arr = [
	{
		"_id": "DT10000001",
		"name": "Gãy xương",
		"description": "Chỗ gãy không thể cử động, có thể tụ máu đông",
		"medicalRecords": ["REC10000001", "REC10000002", "REC10000003", "REC10000007", "REC10000010"]
	},

	{
		"_id": "DT10000002",
		"name": "Xuất huyết trong vòng não bộ",
		"description": "",
		"medicalRecords": ["REC10000009"]
	},
	
	{
		"_id": "DT10000003",
		"name": "Thoái hóa xương khớp",
		"description": "Cử động khó khăn, có dấu hiệu đau nhức",
		"medicalRecords": ["REC10000004", "REC10000008"]
	},
	{
		"_id": "DT10000004",
		"name": "Tổn thương mạch máu, thần kinh",
		"description": "Có cảm giác đau buốt toàn thân",
		"medicalRecords": ["REC10000006"]
	},
	{
		"_id": "DT10000005",
		"name": "Bỏng",
		"description": "Vùng da tổn thương bị biến dạng",
		"medicalRecords": ["REC10000005"]
	},

	{
		"_id": "DT10000006",
		"name": "Viêm kết mạc",
		"description": "Vùng sau giác mạc bị viêm hoặc bị tổn thương",
		"medicalRecords": ["REC10000011","REC10000013","REC10000014","REC10000018"]
	},

	{
		"_id": "DT10000007",
		"name": "Viêm giác mạc",
		"description": "Vùng giác mạc và mí mắt bị viêm, sưng tấy",
		"medicalRecords": ["REC10000012","REC10000015","REC10000016","REC10000017","REC10000019","REC10000020"]
	},

	{
		"_id": "DT10000008",
		"name": "Viêm đường hô hấp",
		"description": "Đường hô hấp bị viêm",
		"medicalRecords": ["REC10000022","REC10000024","REC10000025","REC10000026"]
	},

	{
		"_id": "DT10000009",
		"name": "Viêm họng-amidan",
		"description": "Đau họng-amidan",
		"medicalRecords": ["REC10000021","REC10000027","REC10000028","REC10000030"]
	},

	{
		"_id": "DT10000010",
		"name": "Các bệnh về tai",
		"description": "Có thể bị viêm tai ngoài hoặc giữa",
		"medicalRecords": ["REC10000023","REC10000029"]
	},

	{
		"_id": "DT10000011",
		"name": "Ung thư vú",
		"description": "",
		"medicalRecords": ["REC10000034","REC10000037"]
	},

	{
		"_id": "DT10000012",
		"name": "Ung thư phổi",
		"description": "",
		"medicalRecords": ["REC10000036","REC10000038"]
	},

	{
		"_id": "DT10000013",
		"name": "Ung thư gan",
		"description": "",
		"medicalRecords": ["REC10000032","REC10000040"]
	},

	{
		"_id": "DT10000014",
		"name": "Ung thư cổ tử cung",
		"description": "",
		"medicalRecords": ["REC10000033","REC10000039"]
	},

	{
		"_id": "DT10000015",
		"name": "Ung thư não",
		"description": "",
		"medicalRecords": ["REC10000031","REC10000035"]
	},

	{
		"_id": "DT10000016",
		"name": "Hắc lào",
		"description": "Trên da nổi mẩn đỏ, rìa ngoài có mụn nước đồng xu",
		"medicalRecords": ["REC10000043","REC10000049"]
	},

	{
		"_id": "DT10000017",
		"name": "Lang beng",
		"description": "Trên da có những đốm lang beng sáng hơn màu da bình thuòng",
		"medicalRecords": ["REC10000044","REC10000046"]
	},

	{
		"_id": "DT10000018",
		"name": "Ghẻ",
		"description": "Trên da có nhiều mụn nhỏ li ti",
		"medicalRecords": ["REC10000041","REC10000048"]
	},

	{
		"_id": "DT10000019",
		"name": "Nấm da",
		"description": "Ngứa da, có thể nhiễm trùng, mưng mủ, lở loét",
		"medicalRecords": ["REC10000047","REC10000050"]
	},

	{
		"_id": "DT10000020",
		"name": "Vẩy nến",
		"description": "Vùng da bị đóng vẩy, á sừng",
		"medicalRecords": ["REC10000042","REC10000049"]
	}
]

db.diseaseTypes.insert(arr);