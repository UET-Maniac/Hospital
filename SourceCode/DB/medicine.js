var arr = [
	{
		"_id": "MED10000001",
		"name": "Cao bó gãy xương",
		"effect": "Tiêu sưng, giảm đau, liền xương",
		"use": "đem dàn thuốc lên giấy dấu dày 3mm vừa đủ bó quanh chỗ xương gẫy, bó vào xung quang chỗ gây, đặt nẹp, băng cố định cho chặt. Khi nơi gây đã ổn định, ba ngày thay thuốc 1 lần.",
		"description": "Các loại thảo mộc chiết xuất từ Lào",
		"medicalRecords": ["REC10000001", "REC10000002", "REC10000003", "REC10000007", "REC10000010"]
	},
	{
		"_id": "MED10000002",
		"name": "Cao bạch hổ",
		"effect": "Tiêu sưng, giảm đau, liền xương",
		"use": "đem dàn thuốc lên giấy dấu dày 3mm vừa đủ bó quanh chỗ xương gẫy, bó vào xung quang chỗ gây, đặt nẹp, băng cố định cho chặt. Khi nơi gây đã ổn định, ba ngày thay thuốc 1 lần.",
		"description": "Xương hổ, 1 số loại thảo mộc hiếm trên sa mạc",
		"medicalRecords": ["REC10000001", "REC10000002", "REC10000003", "REC10000007", "REC10000010"]
	},
	{
		"_id": "MED10000003",
		"name": "Panadol",
		"effect": "Giảm đau đầu",
		"use": "Uống mỗi lần sau bữa ăn",
		"description": "Chi tiết xem tại bao bì",
		"medicalRecords": ["REC10000009"]
	},
	{
		"_id": "MED10000004",
		"name": "Valprat natri",
		"effect": "Chống động thần kinh, an thần",
		"use": "Uống khi có dấu hiệu lên cơn bệnh",
		"description": "Chi tiết xem tại bao bì",
		"medicalRecords": ["REC10000009"]
	},
	{
		"_id": "MED10000005",
		"name": "Viêm xương khớp cây đa",
		"effect": "Điều trị, làm chậm quá trình thoái hóa xương khớp",
		"use": "Uống ngày 3 lần",
		"description": "Chi tiết xem tại bao bì",
		"medicalRecords": ["REC10000004", "REC10000008"]
	},
	{
		"_id": "MED10000006",
		"name": "Viêm khớp Tâm Bình",
		"effect": "Điều trị, làm chậm quá trình thoái hóa xương khớp",
		"use": "Uống với rượu hoặc bia để tăng hiệu quả",
		"description": "Chi tiết xem tại bao bì",
		"medicalRecords": ["REC10000004", "REC10000008"]
	},
	{
		"_id": "MED10000007",
		"name": "CumarGold",
		"effect": "Chữa bỏng, ngăn ngừa nhiễm trùng",
		"use": "Thoa đều vào vùng da tổn thương mỗi 6 tiếng",
		"description": "Chi tiết xem tại bao bì",
		"medicalRecords": ["REC10000005"]
	},
	{
		"_id": "MED10000008",
		"name": "CumarSilver",
		"effect": "Chữa bỏng, ngăn ngừa nhiễm trùng",
		"use": "Thoa đều vào vùng da tổn thương mỗi 12 tiếng",
		"description": "Chi tiết xem tại bao bì",
		"medicalRecords": ["REC10000005"]
	},
	{
		"_id": "MED10000009",
		"name": "CumarBronze",
		"effect": "Chữa bỏng, ngăn ngừa nhiễm trùng",
		"use": "Thoa đều vào vùng da tổn thương mỗi 18 tiếng",
		"description": "Chi tiết xem tại bao bì",
		"medicalRecords": ["REC10000005"]
	},
	{
		"_id": "MED10000010",
		"name": "CumarPlatinum",
		"effect": "Chữa bỏng, ngăn ngừa nhiễm trùng",
		"use": "Thoa đều vào vùng da tổn thương mỗi 24 tiếng",
		"description": "Chi tiết xem tại bao bì",
		"medicalRecords": ["REC10000005"]
	},

	{
		"_id": "MED10000011",
		"name": "Thuốc nhỏ mắt V.rohto",
		"effect": "Hỗ trợ cải thiện tình trạng giảm thị lực ở người cận thị, mắt mờ, mỏi mệt, xung huyết kết mạc, viêm mí mắt, ngứa mắt",
		"use": "Nhỏ mắt bất cứ lúc nào",
		"description": "Chi tiết xem tại bao bì",
		"medicalRecords": ["REC10000012","REC10000015","REC10000016","REC10000017",
							"REC10000019","REC10000020"]
	},

	{
		"_id": "MED10000012",
		"name": "Thuốc nhỏ mắt cloramphenicol",
		"effect": "Hiệu quả trong chữa viêm mi mắt, viêm giác mạc",
		"use": "Nhỏ mắt bất kì lúc nào",
		"description": "Chi tiết xem tại bao bì",
		"medicalRecords": ["REC10000012","REC10000015","REC10000016","REC10000017",
							"REC10000019","REC10000020"]
	},

	{
		"_id": "MED10000013",
		"name": "Thuốc nhỏ mắt 40EX Vitamin Eye Drops",
		"effect": "Giúp chữa mờ mắt, mỏi mắt, ngứa mắt, viêm bờ mi và xung huyết kết mạc",
		"use": "Nhỏ mắt bất kể lúc nào",
		"description": "Chi tiết xem tại bao bì",
		"medicalRecords": ["REC10000011","REC10000013","REC10000014","REC10000018"]
	},

	{
		"_id": "MED10000014",
		"name": "Thuốc nhỏ mắt Fx Neo V+ 12ml",
		"effect": "Chữa xung huyết kết mạc",
		"use": "Nhỏ mắt vô tư",
		"description": "Chi tiết xem tại bao bì",
		"medicalRecords": ["REC10000011","REC10000013","REC10000014","REC10000018"]
	},

	{
		"_id": "MED10000015",
		"name": "Thuốc Nhỏ Mắt Systane Ultra 5ml",
		"effect": "Làm giảm những triệu chứng rát và kích ứng do mắt bị khô",
		"use": "Nhỏ mắt tùy thích",
		"description": "Chi tiết xem tại bao bì",
		"medicalRecords": ["REC10000012","REC10000015","REC10000016","REC10000017",
							"REC10000019","REC10000020"]
	},

	{
		"_id": "MED10000016",
		"name": "Xoang bách phục",
		"effect": "Chữa, ngăn ngừa viêm xoang",
		"use": "Uống vào mỗi lúc ngủ dậy",
		"description": "Chi tiết xem tại bao bì",
		"medicalRecords": ["REC10000022","REC10000024","REC10000025"]
	},

	{
		"_id": "MED10000017",
		"name": "Paracetamol",
		"effect": "Làm giảm các triệu chứng viêm họng",
		"use": "Uống sau khi ăn",
		"description": "Chi tiết xem tại bao bì",
		"medicalRecords": ["REC10000021","REC10000027","REC10000028","REC10000030"]
	},

	{
		"_id": "MED10000018",
		"name": "Amoxicillin",
		"effect": "Ngăn ngừa chảy mủ ở tai",
		"use": "Uống sau khi vệ sinh tai",
		"description": "Chi tiết xem tại bao bì",
		"medicalRecords": ["REC10000023","REC10000029"]
	},

	{
		"_id": "MED10000019",
		"name": "Histamine tổng hợp",
		"effect": "Kháng sinh chống viêm tai giữa",
		"use": "Uống ngày 2 lần",
		"description": "Chi tiết xem tại bao bì",
		"medicalRecords": ["REC10000023","REC10000029"]
	},

	{
		"_id": "MED10000020",
		"name": "Penicillin",
		"effect": "Kháng sinh ngằn ngừa viêm phổi",
		"use": "Uống theo chỉ định bác sĩ",
		"description": "Chi tiết xem tại bao bì",
		"medicalRecords": ["REC10000026"]
	},

	{
		"_id": "MED10000021",
		"name": "Holywater01",
		"effect": "Chữa ung thư",
		"use": "Uống ngày 1 lần",
		"description": "Nước được ban phép",
		"medicalRecords": ["REC10000031","REC10000032","REC10000033","REC10000034","REC10000035",
							"REC10000036","REC10000037","REC10000038","REC10000039","REC10000040"]
	},

	{
		"_id": "MED10000022",
		"name": "Holywater02",
		"effect": "Chữa ung thư",
		"use": "Uống ngày 2 lần",
		"description": "Nước được ban phép",
		"medicalRecords": ["REC10000031","REC10000032","REC10000033","REC10000034","REC10000035",
							"REC10000036","REC10000037","REC10000038","REC10000039","REC10000040"]
	},

	{
		"_id": "MED10000023",
		"name": "Holywater03",
		"effect": "Chữa ung thư",
		"use": "Uống ngày 3 lần",
		"description": "Nước được ban phép",
		"medicalRecords": ["REC10000031","REC10000032","REC10000033","REC10000034","REC10000035",
							"REC10000036","REC10000037","REC10000038","REC10000039","REC10000040"]
	},

	{
		"_id": "MED10000024",
		"name": "Holywater04",
		"effect": "Chữa ung thư",
		"use": "Uống ngày 4 lần",
		"description": "Nước được ban phép",
		"medicalRecords": ["REC10000031","REC10000032","REC10000033","REC10000034","REC10000035",
							"REC10000036","REC10000037","REC10000038","REC10000039","REC10000040"]
	},

	{
		"_id": "MED10000025",
		"name": "Holywater05",
		"effect": "Chữa ung thư",
		"use": "Uống ngày 5 lần",
		"description": "Nước được ban phép",
		"medicalRecords": ["REC10000031","REC10000032","REC10000033","REC10000034","REC10000035",
							"REC10000036","REC10000037","REC10000038","REC10000039","REC10000040"]
	},

	{
		"_id": "MED10000026",
		"name": "Micozanol",
		"effect": "Trị hắc lào tận gốc",
		"use": "Bôi vào vùng da bị ngứa 2 lần 1 ngày",
		"description": "Chi tiết xem tại bao bì",
		"medicalRecords": ["REC10000043","REC10000049"]
	},

	{
		"_id": "MED10000027",
		"name": "Nizoral",
		"effect": "Loại bỏ triệu chứng ngứa, kháng viêm",
		"use": "Bôi vào vùng da bị ngứa 2 lần 1 ngày",
		"description": "Chi tiết xem tại bao bì",
		"medicalRecords": ["REC10000044","REC10000046"]
	},

	{
		"_id": "MED10000028",
		"name": "Eurax",
		"effect": "Trị ghẻ ngứa hiệu quả",
		"use": "Bôi vào vùng da bị ngứa 2 lần 1 ngày",
		"description": "Chi tiết xem tại bao bì",
		"medicalRecords": ["REC10000041","REC10000048"]
	},

	{
		"_id": "MED10000029",
		"name": "Oxiconazol",
		"effect": "Chữa nấm da",
		"use": "Bôi vào vùng da bị ngứa 2 lần 1 ngày",
		"description": "Chi tiết xem tại bao bì",
		"medicalRecords": ["REC10000042","REC10000047","REC10000050"]
	},

	{
		"_id": "MED10000030",
		"name": "Salicylic",
		"effect": "Giúp bong vẩy, tiêu sừng",
		"use": "Bôi vào vùng da đóng vẩy, á sừng 2 lần 1 ngày",
		"description": "Chi tiết xem tại bao bì",
		"medicalRecords": ["REC10000045"]
	}
]

db.medicine.insert(arr);	