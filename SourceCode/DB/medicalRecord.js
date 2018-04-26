var arr = [	
	{
		"_id": "REC10000001",
		"doctorId": "USE100000005",
		"patientId": "USE100000070",
		"bedNo": "210-3",
		"theDiagnosis": "Gãy tay",
		"status": "Nội trú",
		"treatment": "Bó bột, tránh cử động nhiều",
		"timeStart": new Date('2016-05-17'),
		"timeEnd": new Date('2016-06-11'),
		"diseaseTypes": ["DT10000001"],
		"medicines": ["MED10000001", "MED10000002"]
	},
	{
		"_id": "REC10000002",
		"doctorId": "USE100000001",
		"patientId": "USE100000068",
		"bedNo": "200-5",
		"theDiagnosis": "Gãy chân",
		"status": "Nội trú",
		"treatment": "Bó bột, tránh cử động nhiều",
		"timeStart": new Date('2016-09-12'),
		"timeEnd": new Date('2016-11-14'),
		"diseaseTypes": ["DT00000001"],
		"medicines": ["MED10000001", "MED10000002"]
	},
	{
		"_id": "REC10000003",
		"doctorId": "USE100000002",
		"patientId": "USE100000073",
		"bedNo": "204-3",
		"theDiagnosis": "Gãy cổ",
		"status": "Nội trú",
		"treatment": "Nẹp cổ, cố định vùng chấn thương",
		"timeStart": new Date('2017-01-22'),
		"timeEnd": new Date('2017-03-08'),
		"diseaseTypes": ["DT10000001"],
		"medicines": ["MED10000001", "MED10000002"]
	},
	{
		"_id": "REC10000004",
		"doctorId": "USE100000003",
		"patientId": "USE100000052",
		"bedNo": "201-2",
		"theDiagnosis": "Thoát vị đĩa đệm",
		"status": "Nội trú",
		"treatment": "Điều trị thoái hóa liên tục",
		"timeStart": new Date('2017-03-20'),
		"timeEnd": new Date('2017-04-21'),
		"diseaseTypes": ["DT10000003"],
		"medicines": ["MED10000005", "MED10000006"]
	},
	{
		"_id": "REC10000005",
		"doctorId": "USE100000002",
		"patientId": "USE100000073",
		"bedNo": "207-4",
		"theDiagnosis": "Bỏng",
		"status": "Nội trú",
		"treatment": "Cấy ghép mô, da bị tổn thương",
		"timeStart": new Date('2017-05-26'),
		"timeEnd": new Date('2017-08-07'),
		"diseaseTypes": ["DT10000005"],
		"medicines": ["MED10000009", "MED10000010"]
	},
	{
		"_id": "REC10000006",
		"doctorId": "USE100000004",
		"patientId": "USE100000042",
		"bedNo": "208-3",
		"theDiagnosis": "Đứt dây chằng",
		"status": "Nội trú",
		"treatment": "Nối lại dây chằng",
		"timeStart": new Date('2017-08-08'),
		"timeEnd": new Date('2017-08-30'),
		"diseaseTypes": ["DT10000004"],
		"medicines": ["MED10000007", "MED10000008"]
	},
	{
		"_id": "REC10000007",
		"doctorId": "USE100000005",
		"patientId": "USE100000054",
		"bedNo": "207-3",
		"theDiagnosis": "Gãy cột sống",
		"status": "Nội trú",
		"treatment": "Đóng định cố định cột sống",
		"timeStart": new Date('2017-10-02'),
		"timeEnd": new Date('2017-10-08'),
		"diseaseTypes": ["DT10000001"],
		"medicines": ["MED10000001", "MED10000002"]
	},
	{
		"_id": "REC10000008",
		"doctorId": "USE100000001",
		"patientId": "USE100000029",
		"bedNo": "208-2",
		"theDiagnosis": "Thoái hóa khớp",
		"status": "Nội trú",
		"treatment": "Điều trị tại nhà",
		"timeStart": new Date('2017-10-19'),
		"timeEnd": new Date('2017-10-20'),
		"diseaseTypes": ["DT10000003"],
		"medicines": ["MED10000005", "MED10000002"]
	},
	{
		"_id": "REC10000009",
		"doctorId": "USE100000002",
		"patientId": "USE100000053",
		"bedNo": "203-1",
		"theDiagnosis": "Chấn thương sọ não",
		"status": "Nội trú",
		"treatment": "Phẫu thuật hộp sọ bệnh nhân",
		"timeStart": new Date('2018-01-01'),
		"timeEnd": new Date('2018-01-12'),
		"diseaseTypes": ["DT10000002"],
		"medicines": ["MED10000003", "MED10000004"]
	},
	{
		"_id": "REC10000010",
		"doctorId": "USE100000005",
		"patientId": "USE100000063",
		"bedNo": "210-1",
		"theDiagnosis": "Gãy tay",
		"status": "Nội trú",
		"treatment": "Bó bột, tránh cử động nhiều",
		"timeStart": new Date('2018-04-26'),
		"timeEnd": new Date('2018-08-04'),
		"diseaseTypes": ["DT10000001"],
		"medicines": ["MED10000001", "MED10000002"]
	},

	{
		"_id": "REC10000011",
		"doctorId": "USE100000006",
		"patientId": "USE100000068",
		"bedNo": "300-1",
		"theDiagnosis": "Đau mắt đỏ",
		"status": "Nội trú",
		"treatment": "Tránh tiếp xúc người khác",
		"timeStart": new Date('2018-09-17'),
		"timeEnd": new Date('2018-11-04'),
		"diseaseTypes": ["DT10000006"],
		"medicines": ["MED10000013", "MED10000014"]
	},

	{
		"_id": "REC10000012",
		"doctorId": "USE100000007",
		"patientId": "USE100000046",
		"bedNo": "306-1",
		"theDiagnosis": "Khô mắt",
		"status": "Nội trú",
		"treatment": "Sử dụng thuốc nhỏ mắt như đã kê",
		"timeStart": new Date('2018-11-24'),
		"timeEnd": new Date('2018-12-02'),
		"diseaseTypes": ["DT10000007"],
		"medicines": ["MED10000011", "MED10000012","MED10000015"]
	},

	{
		"_id": "REC10000013",
		"doctorId": "USE1000000008",
		"patientId": "USE100000061",
		"bedNo": "307-1",
		"theDiagnosis": "Đục thủy tinh thể",
		"status": "Nội trú",
		"treatment": "Cần phẫu thuật mắt",
		"timeStart": new Date('2016-01-03'),
		"timeEnd": new Date('2016-04-14'),
		"diseaseTypes": ["DT10000006"],
		"medicines": ["MED10000013", "MED10000014"]
	},

	{
		"_id": "REC10000014",
		"doctorId": "USE100000009",
		"patientId": "USE100000081",
		"bedNo": "303-1",
		"theDiagnosis": "Đau mắt đỏ",
		"status": "Nội trú",
		"treatment": "Tránh tiếp xúc người khác",
		"timeStart": new Date('2016-07-02'),
		"timeEnd": new Date('2016-08-09'),
		"diseaseTypes": ["DT10000006"],
		"medicines": ["MED10000013", "MED10000014"]
	},

	{
		"_id": "REC10000015",
		"doctorId": "USE100000010",
		"patientId": "USE100000051",
		"bedNo": "300-2",
		"theDiagnosis": "Viêm mí mắt",
		"status": "Nội trú",
		"treatment": "Sử dụng thuốc nhỏ mắt, vệ sinh sạch sẽ vùng mí mắt",
		"timeStart": new Date('2016-08-12'),
		"timeEnd": new Date('2016-09-09'),
		"diseaseTypes": ["DT10000007"],
		"medicines": ["MED10000011", "MED10000012","MED10000015"]
	},

	{
		"_id": "REC10000016",
		"doctorId": "USE100000008",
		"patientId": "USE100000098",
		"bedNo": "301-1",
		"theDiagnosis": "Lẹo",
		"status": "Nội trú",
		"treatment": "Chích lẹo",
		"timeStart": new Date('2016-10-07'),
		"timeEnd": new Date('2016-12-19'),
		"diseaseTypes": ["DT10000007"],
		"medicines": ["MED10000011", "MED10000012","MED10000015"]
	},

	{
		"_id": "REC10000017",
		"doctorId": "USE100000007",
		"patientId": "USE100000066",
		"bedNo": "304-1",
		"theDiagnosis": "Lẹo",
		"status": "Nội trú",
		"treatment": "Chích lẹo",
		"timeStart": new Date('2017-01-17'),
		"timeEnd": new Date('2017-02-07'),
		"diseaseTypes": ["DT10000007"],
		"medicines": ["MED10000011", "MED10000012","MED10000015"]
	},

	{
		"_id": "REC10000018",
		"doctorId": "USE100000010",
		"patientId": "USE100000036",
		"bedNo": "304-2",
		"theDiagnosis": "Đau mắt đỏ",
		"status": "Nội trú",
		"treatment": "Tránh tiếp xúc người khác",
		"timeStart": new Date('2017-04-03'),
		"timeEnd": new Date('2017-04-12'),
		"diseaseTypes": ["DT10000006"],
		"medicines": ["MED10000013", "MED10000014"]
	},

	{
		"_id": "REC10000019",
		"doctorId": "USE100000009",
		"patientId": "USE100000064",
		"bedNo": "302-1",
		"theDiagnosis": "Viêm mí mắt",
		"status": "Nội trú",
		"treatment": "Sử dụng thuốc nhỏ mắt, vệ sinh sạch sẽ vùng mí mắt",
		"timeStart": new Date('2016-05-14'),
		"timeEnd": new Date('2016-05-25'),
		"diseaseTypes": ["DT10000007"],
		"medicines": ["MED10000011", "MED10000012","MED10000015"]
	},

	{
		"_id": "REC10000020",
		"doctorId": "USE100000008",
		"patientId": "USE100000049",
		"bedNo": "309-1",
		"theDiagnosis": "Lẹo",
		"status": "Nội trú",
		"treatment": "Chích lẹo",
		"timeStart": new Date('2017-06-12'),
		"timeEnd": new Date('2017-06-17'),
		"diseaseTypes": ["DT10000007"],
		"medicines": ["MED10000011", "MED10000012","MED10000015"]
	},

	{
		"_id": "REC10000021",
		"doctorId": "USE100000011",
		"patientId": "USE100000031",
		"bedNo": "407-1",
		"theDiagnosis": "Đau họng",
		"status": "Nội trú",
		"treatment": "Uống thuốc đã kê",
		"timeStart": new Date('2017-06-22'),
		"timeEnd": new Date('2017-08-09'),
		"diseaseTypes": ["DT10000009"],
		"medicines": ["MED10000017"]
	},

	{
		"_id": "REC10000022",
		"doctorId": "USE100000013",
		"patientId": "USE100000044",
		"bedNo": "400-1",
		"theDiagnosis": "Viêm xoang",
		"status": "Nội trú",
		"treatment": "Uống thuốc đều đặn",
		"timeStart": new Date('2017-11-18'),
		"timeEnd": new Date('2018-02-11'),
		"diseaseTypes": ["DT10000008"],
		"medicines": ["MED10000016"]
	},

	{
		"_id": "REC10000023",
		"doctorId": "USE100000012",
		"patientId": "USE100000073",
		"bedNo": "404-1",
		"theDiagnosis": "Ù tai",
		"status": "Nội trú",
		"treatment": "Nghỉ ngơi dưỡng sức, uống thuốc đều đặn",
		"timeStart": new Date('2018-02-22'),
		"timeEnd": new Date('2018-04-26'),
		"diseaseTypes": ["DT10000010"],
		"medicines": ["MED10000018", "MED10000019"]
	},

	{
		"_id": "REC10000024",
		"doctorId": "USE100000014",
		"patientId": "USE100000063",
		"bedNo": "410-1",
		"theDiagnosis": "Viêm xoang",
		"status": "Nội trú",
		"treatment": "Uống thuốc đều đặn",
		"timeStart": new Date('2018-07-13'),
		"timeEnd": new Date('2018-08-09'),
		"diseaseTypes": ["DT10000008"],
		"medicines": ["MED10000016"]
	},

	{
		"_id": "REC10000025",
		"doctorId": "USE100000011",
		"patientId": "USE100000059",
		"bedNo": "400-2",
		"theDiagnosis": "Viêm mũi dị ứng",
		"status": "Nội trú",
		"treatment": "Tránh tiếp xúc với trời lạnh",
		"timeStart": new Date('2018-08-29'),
		"timeEnd": new Date('2018-12-01'),
		"diseaseTypes": ["DT10000008"],
		"medicines": ["MED10000016"]
	},

	{
		"_id": "REC10000026",
		"doctorId": "USE100000012",
		"patientId": "USE100000078",
		"bedNo": "403-1",
		"theDiagnosis": "Viêm phổi",
		"status": "Nội trú",
		"treatment": "Uống thuốc đều đặn, tránh tiếp xúc với trời lạnh",
		"timeStart": new Date('2016-03-27'),
		"timeEnd": new Date('2016-05-03'),
		"diseaseTypes": ["DT10000008"],
		"medicines": ["MED10000020"]
	},

	{
		"_id": "REC10000027",
		"doctorId": "USE100000015",
		"patientId": "USE100000040",
		"bedNo": "404-2",
		"theDiagnosis": "Viêm amidan",
		"status": "Nội trú",
		"treatment": "Uống thuốc đã kê",
		"timeStart": new Date('2016-05-04'),
		"timeEnd": new Date('2016-10-02'),
		"diseaseTypes": ["DT10000009"],
		"medicines": ["MED10000017"]
	},

	{
		"_id": "REC10000028",
		"doctorId": "USE100000015",
		"patientId": "USE100000045",
		"bedNo": "409-1",
		"theDiagnosis": "Viêm họng",
		"status": "Nội trú",
		"treatment": "Uống thuốc đã kê",
		"timeStart": new Date('2017-01-02'),
		"timeEnd": new Date('2017-02-26'),
		"diseaseTypes": ["DT10000009"],
		"medicines": ["MED10000017"]
	},

	{
		"_id": "REC10000029",
		"doctorId": "USE100000012",
		"patientId": "USE100000065",
		"bedNo": "410-2",
		"theDiagnosis": "Viêm tai giữa",
		"status": "Nội trú",
		"treatment": "Vệ sinh tai sạch sẽ",
		"timeStart": new Date('2017-04-21'),
		"timeEnd": new Date('2017-06-30'),
		"diseaseTypes": ["DT10000010"],
		"medicines": ["MED10000018", "MED10000019"]
	},

	{
		"_id": "REC10000030",
		"doctorId": "USE100000011",
		"patientId": "USE100000065",
		"bedNo": "404-3",
		"theDiagnosis": "Đau họng",
		"status": "Nội trú",
		"treatment": "Uống thuốc đã kê",
		"timeStart": new Date('2017-07-12'),
		"timeEnd": new Date('2017-08-16'),
		"diseaseTypes": ["DT10000009"],
		"medicines": ["MED10000017"]
	},

	{
		"_id": "REC10000031",
		"doctorId": "USE100000016",
		"patientId": "USE100000088",
		"bedNo": "510-1",
		"theDiagnosis": "Ung thư não",
		"status": "Nội trú",
		"treatment": "Điều trị theo chỉ định của bác sĩ",
		"timeStart": new Date('2017-12-05'),
		"timeEnd": new Date('2017-12-14'),
		"diseaseTypes": ["DT10000015"],
		"medicines": ["MED10000021", "MED10000022","MED10000023","MED10000024","MED10000025"]
	},

	{
		"_id": "REC10000032",
		"doctorId": "USE100000020",
		"patientId": "USE100000026",
		"bedNo": "505-1",
		"theDiagnosis": "Ung thư gan",
		"status": "Nội trú",
		"treatment": "Điều trị theo chỉ định của bác sĩ",
		"timeStart": new Date('2017-12-15'),
		"timeEnd": new Date('2018-01-04'),
		"diseaseTypes": ["DT10000013"],
		"medicines": ["MED10000021", "MED10000022","MED10000023","MED10000024","MED10000025"]
	},

	{
		"_id": "REC10000033",
		"doctorId": "USE100000019",
		"patientId": "USE100000033",
		"bedNo": "506-1",
		"theDiagnosis": "Ung thư cổ tử cung",
		"status": "Nội trú",
		"treatment": "Điều trị theo chỉ định của bác sĩ",
		"timeStart": new Date('2018-02-15'),
		"timeEnd": new Date('2018-03-05'),
		"diseaseTypes": ["DT10000014"],
		"medicines": ["MED10000021", "MED10000022","MED10000023","MED10000024","MED10000025"]
	},

	{
		"_id": "REC10000034",
		"doctorId": "USE100000017",
		"patientId": "USE100000068",
		"bedNo": "502-1",
		"theDiagnosis": "Ung thư vú",
		"status": "Nội trú",
		"treatment": "Điều trị theo chỉ định của bác sĩ",
		"timeStart": new Date('2018-03-18'),
		"timeEnd": new Date('2018-03-21'),
		"diseaseTypes": ["DT10000011"],
		"medicines": ["MED10000021", "MED10000022","MED10000023","MED10000024","MED10000025"]
	},

	{
		"_id": "REC10000035",
		"doctorId": "USE100000018",
		"patientId": "USE100000099",
		"bedNo": "507-1",
		"theDiagnosis": "Ung thư não",
		"status": "Nội trú",
		"treatment": "Điều trị theo chỉ định của bác sĩ",
		"timeStart": new Date('2018-03-30'),
		"timeEnd": new Date('2018-04-21'),
		"diseaseTypes": ["DT10000015"],
		"medicines": ["MED10000021", "MED10000022","MED10000023","MED10000024","MED10000025"]
	},

	{
		"_id": "REC10000036",
		"doctorId": "USE100000019",
		"patientId": "USE100000051",
		"bedNo": "505-2",
		"theDiagnosis": "Ung thư phổi",
		"status": "Nội trú",
		"treatment": "Điều trị theo chỉ định của bác sĩ",
		"timeStart": new Date('2018-06-27'),
		"timeEnd": new Date('2018-08-21'),
		"diseaseTypes": ["DT10000012"],
		"medicines": ["MED10000021", "MED10000022","MED10000023","MED10000024","MED10000025"]
	},

	{
		"_id": "REC10000037",
		"doctorId": "USE100000020",
		"patientId": "USE100000034",
		"bedNo": "500-1",
		"theDiagnosis": "Ung thư vú",
		"status": "Nội trú",
		"treatment": "Điều trị theo chỉ định của bác sĩ",
		"timeStart": new Date('2018-10-26'),
		"timeEnd": new Date('2018-12-04'),
		"diseaseTypes": ["DT10000011"],
		"medicines": ["MED10000021", "MED10000022","MED10000023","MED10000024","MED10000025"]
	},

	{
		"_id": "REC10000038",
		"doctorId": "USE100000017",
		"patientId": "USE100000100",
		"bedNo": "510-2",
		"theDiagnosis": "Ung thư phổi",
		"status": "Nội trú",
		"treatment": "Điều trị theo chỉ định của bác sĩ",
		"timeStart": new Date('2016-02-05'),
		"timeEnd": new Date('2016-03-29'),
		"diseaseTypes": ["DT10000012"],
		"medicines": ["MED10000021", "MED10000022","MED10000023","MED10000024","MED10000025"]
	},
	{
		"_id": "REC10000039",
		"doctorId": "USE100000016",
		"patientId": "USE100000080",
		"bedNo": "504-1",
		"theDiagnosis": "Ung thư cổ tử cung",
		"status": "Nội trú",
		"treatment": "Điều trị theo chỉ định của bác sĩ",
		"timeStart": new Date('2016-06-02'),
		"timeEnd": new Date('2016-06-14'),
		"diseaseTypes": ["DT10000014"],
		"medicines": ["MED10000021", "MED10000022","MED10000023","MED10000024","MED10000025"]
	},


	{
		"_id": "REC10000040",
		"doctorId": "USE100000018",
		"patientId": "USE100000091",
		"bedNo": "504-2",
		"theDiagnosis": "Ung thư gan",
		"status": "Nội trú",
		"treatment": "Điều trị theo chỉ định của bác sĩ",
		"timeStart": new Date('2016-06-18'),
		"timeEnd": new Date('2016-08-14'),
		"diseaseTypes": ["DT10000013"],
		"medicines": ["MED10000021", "MED10000022","MED10000023","MED10000024","MED10000025"]
	},

	{
		"_id": "REC10000041",
		"doctorId": "USE100000021",
		"patientId": "USE100000026",
		"bedNo": "600-1",
		"theDiagnosis": "Ghẻ",
		"status": "Nội trú",
		"treatment": "Vệ sinh sạch sẽ, bôi thuốc đúng như chỉ định",
		"timeStart": new Date('2016-08-29'),
		"timeEnd": new Date('2016-10-05'),
		"diseaseTypes": ["DT10000018"],
		"medicines": ["MED10000028"]
	},

	{
		"_id": "REC10000042",
		"doctorId": "USE100000022",
		"patientId": "USE100000093",
		"bedNo": "603-1",
		"theDiagnosis": "Nấm da",
		"status": "Nội trú",
		"treatment": "Vệ sinh sạch sẽ, bôi thuốc đúng như chỉ định",
		"timeStart": new Date('2017-01-23'),
		"timeEnd": new Date('2017-02-27'),
		"diseaseTypes": ["DT10000019"],
		"medicines": ["MED10000029"]
	},

	{
		"_id": "REC10000043",
		"doctorId": "USE100000023",
		"patientId": "USE100000053",
		"bedNo": "603-2",
		"theDiagnosis": "Hắc lào",
		"status": "Nội trú",
		"treatment": "Vệ sinh sạch sẽ, bôi thuốc đúng như chỉ định",
		"timeStart": new Date('2017-03-06'),
		"timeEnd": new Date('2017-03-18'),
		"diseaseTypes": ["DT10000016"],
		"medicines": ["MED10000026"]
	},

	{
		"_id": "REC10000044",
		"doctorId": "USE100000024",
		"patientId": "USE100000056",
		"bedNo": "604-1",
		"theDiagnosis": "Lang beng",
		"status": "Nội trú",
		"treatment": "Vệ sinh sạch sẽ, bôi thuốc đúng như chỉ định",
		"timeStart": new Date('2017-03-23'),
		"timeEnd": new Date('2017-08-01'),
		"diseaseTypes": ["DT10000017"],
		"medicines": ["MED10000027"]
	},

	{
		"_id": "REC10000045",
		"doctorId": "USE100000025",
		"patientId": "USE100000056",
		"bedNo": "608-1",
		"theDiagnosis": "Vẩy nến",
		"status": "Nội trú",
		"treatment": "Vệ sinh sạch sẽ, bôi thuốc đúng như chỉ định",
		"timeStart": new Date('2017-09-04'),
		"timeEnd": new Date('2017-10-04'),
		"diseaseTypes": ["DT10000020"],
		"medicines": ["MED10000030"]
	},

	{
		"_id": "REC10000046",
		"doctorId": "USE100000022",
		"patientId": "USE100000059",
		"bedNo": "609-1",
		"theDiagnosis": "Lang beng",
		"status": "Nội trú",
		"treatment": "Vệ sinh sạch sẽ, bôi thuốc đúng như chỉ định",
		"timeStart": new Date('2017-10-16'),
		"timeEnd": new Date('2017-11-29'),
		"diseaseTypes": ["DT10000017"],
		"medicines": ["MED10000027"]
	},

	{
		"_id": "REC10000047",
		"doctorId": "USE100000021",
		"patientId": "USE100000040",
		"bedNo": "605-1",
		"theDiagnosis": "Nấm da",
		"status": "Nội trú",
		"treatment": "Vệ sinh sạch sẽ, bôi thuốc đúng như chỉ định",
		"timeStart": new Date('2018-01-07'),
		"timeEnd": new Date('2018-02-21'),
		"diseaseTypes": ["DT10000019"],
		"medicines": ["MED10000029"]
	},

	{
		"_id": "REC10000048",
		"doctorId": "USE100000024",
		"patientId": "USE100000046",
		"bedNo": "602-1",
		"theDiagnosis": "Ghẻ",
		"status": "Nội trú",
		"treatment": "Vệ sinh sạch sẽ, bôi thuốc đúng như chỉ định",
		"timeStart": new Date('2018-03-08'),
		"timeEnd": new Date('2018-03-12'),
		"diseaseTypes": ["DT10000018"],
		"medicines": ["MED10000028"]
	},

	{
		"_id": "REC10000049",
		"doctorId": "USE100000023",
		"patientId": "USE100000066",
		"bedNo": "600-2",
		"theDiagnosis": "Hắc lào",
		"status": "Nội trú",
		"treatment": "Vệ sinh sạch sẽ, bôi thuốc đúng như chỉ định",
		"timeStart": new Date('2018-05-26'),
		"timeEnd": new Date('2018-05-31'),
		"diseaseTypes": ["DT10000016"],
		"medicines": ["MED10000026"]
	},

	{
		"_id": "REC10000050",
		"doctorId": "USE100000025",
		"patientId": "USE100000051",
		"bedNo": "605-2",
		"theDiagnosis": "Nấm da",
		"status": "Nội trú",
		"treatment": "Vệ sinh sạch sẽ, bôi thuốc đúng như chỉ định",
		"timeStart": new Date('2018-11-20'),
		"timeEnd": new Date('2018-12-23'),
		"diseaseTypes": ["DT10000019"],
		"medicines": ["MED10000029"]
	}
]	

db.medicalRecord.insert(arr);