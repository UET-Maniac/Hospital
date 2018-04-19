var arr = [
	{
		"_id": "DOC10001000",
		"name": "Nguyễn Văn A",
		"card": "163439199",
		"phoneNumber": "0123456789",
		"birthday": new Date ('1998-01-01'),
		"sex": true,
		"address": "144 Xuân Thủy, Cầu Giấy, Hà Nội",
		"image": "",
		"userName": "nguyenvana@gmail.com",
		"password": "nguyenvana",
		"doctor":
		{
			"level": "Giáo sư",
			"experience": "15 năm kinh nghiệm",
			"star": 5,
			"departmentId": "DEP10000001",
			"dean": true
		}
	},
	{
		"_id": "DOC10001001",
		"name": "Nguyễn Văn B",
		"card": "163456731",
		"phoneNumber": "0123783203",
		"birthday": new Date ('1998-01-02'),
		"sex": true,
		"address": "144 Xuân Thủy, Cầu Giấy, Hà Nội",
		"image": "",
		"userName": "nguyenvanb@gmail.com",
		"password": "nguyenvanb",
		"doctor":
		{
			"level": "Phó giáo sư",
			"experience": "10 năm kinh nghiệm",
			"star": 4,
			"departmentId": "DEP10000001",
			"dean": false
		}
	},
	{
		"_id": "DOC10001002",
		"name": "Trần Văn C",
		"card": "163123090",
		"phoneNumber": "03503132453",
		"birthday": new Date ('1998-01-03'),
		"sex": true,
		"address": "144 Xuân Thủy, Cầu Giấy, Hà Nội",
		"image": "",
		"userName": "tranvanc@gmail.com",
		"password": "tranvanc",
		"doctor":
		{
			"level": "Tiến sĩ",
			"experience": "5 năm kinh nghiệm",
			"star": 3,
			"departmentId": "DEP10000001",
			"dean": false
		}
	},
	{
		"_id": "DOC10001003",
		"name": "Nguyễn Thị D",
		"card": "163457872",
		"phoneNumber": "0912456832",
		"birthday": new Date ('1998-01-03'),
		"sex": false,
		"address": "144 Xuân Thủy, Cầu Giấy, Hà Nội",
		"image": "",
		"userName": "nguyenthid@gmail.com",
		"password": "nguyenthid",
		"doctor":
		{
			"level": "Tiến sĩ",
			"experience": "5 năm kinh nghiệm",
			"star": 3,
			"departmentId": "DEP10000001",
			"dean": false
		}
	},
	{
		"_id": "DOC10001004",
		"name": "Trần Thị A",
		"card": "163345888",
		"phoneNumber": "01231231230",
		"birthday": new Date ('1998-01-05'),
		"sex": false,
		"address": "144 Xuân Thủy, Cầu Giấy, Hà Nội",
		"image": "",
		"userName": "nguynvana@gmail.com",
		"password": "nguyenvana",
		"doctor":
		{
			"level": "Phó tiến sĩ",
			"experience": "5 năm kinh nghiệm",
			"star": 3,
			"departmentId": "DEP10000001",
			"dean": false
		}
	},
	{
		"_id": "AD10001000",
		"name": "Nguyễn Văn X",
		"card": "163245980",
		"phoneNumber": "0912343542",
		"birthday": new Date ('1998-01-06'),
		"sex": true,
		"address": "144 Xuân Thủy, Cầu Giấy, Hà Nội",
		"image": "",
		"userName": "nguynvanX@gmail.com",
		"password": "nguyenvanx",
		"admin": true
	},
	{
		"_id": "USE10001000",
		"name": "Đinh Văn T",
		"card": "163450199",
		"phoneNumber": "0123453489",
		"birthday": new Date ('1998-11-11'),
		"sex": true,
		"address": "144 Xuân Thủy, Cầu Giấy, Hà Nội",
		"image": "",
		"userName": "dinhvant@gmail.com",
		"password": "dinhvant"
	},
	{
		"_id": "USE10001001",
		"name": "Nguyễn Thị Y",
		"card": "163439400",
		"phoneNumber": "0999456789",
		"birthday": new Date ('1998-05-01'),
		"sex": false,
		"address": "144 Xuân Thủy, Cầu Giấy, Hà Nội",
		"image": "",
		"userName": "nguyenthiy@gmail.com",
		"password": "nguyenthiy"
	},
	{
		"_id": "USE10001002",
		"name": "Nguyễn Đức A",
		"card": "163439200",
		"phoneNumber": "0124543989",
		"birthday": new Date ('1998-01-09'),
		"sex": true,
		"address": "144 Xuân Thủy, Cầu Giấy, Hà Nội",
		"image": "",
		"userName": "nguyenduca@gmail.com",
		"password": "nguyenduca"
	},
	{
		"_id": "USE10001003",
		"name": "Nguyễn Quang A",
		"card": "163736223",
		"phoneNumber": "0123137229",
		"birthday": new Date ('1998-12-01'),
		"sex": true,
		"address": "144 Xuân Thủy, Cầu Giấy, Hà Nội",
		"image": "",
		"userName": "nguyenquanga@gmail.com",
		"password": "nguyenquanga"
	},
	{
		"_id": "USE10001004",
		"name": "Trần Văn S",
		"card": "163439100",
		"phoneNumber": "0123456789",
		"birthday": new Date ('1998-01-31'),
		"sex": true,
		"address": "144 Xuân Thủy, Cầu Giấy, Hà Nội",
		"image": "",
		"userName": "tranvans@gmail.com",
		"password": "tranvans"
	},
	{
		"_id": "USE10001005",
		"name": "Nguyễn Văn M",
		"card": "163987345",
		"phoneNumber": "0123548920",
		"birthday": new Date ('1998-02-01'),
		"sex": true,
		"address": "144 Xuân Thủy, Cầu Giấy, Hà Nội",
		"image": "",
		"userName": "nguyenvanm@gmail.com",
		"password": "nguyenvanm"
	},
	{
		"_id": "USE10001006",
		"name": "Đỗ Thị N",
		"card": "162539188",
		"phoneNumber": "0325456789",
		"birthday": new Date ('1998-01-21'),
		"sex": false,
		"address": "144 Xuân Thủy, Cầu Giấy, Hà Nội",
		"image": "",
		"userName": "dothin@gmail.com",
		"password": "dothin"
	},
	{
		"_id": "USE10001007",
		"name": "Nguyễn Thị A",
		"card": "163429123",
		"phoneNumber": "0123456789",
		"birthday": new Date ('1998-11-01'),
		"sex": false,
		"address": "144 Xuân Thủy, Cầu Giấy, Hà Nội",
		"image": "",
		"userName": "nguyenthia@gmail.com",
		"password": "nguyenthia"
	},
	{
		"_id": "U10001008",
		"name": "Đoàn Văn A",
		"card": "163434198",
		"phoneNumber": "0123456789",
		"birthday": new Date ('1998-03-01'),
		"sex": true,
		"address": "144 Xuân Thủy, Cầu Giấy, Hà Nội",
		"image": "",
		"userName": "doanvana@gmail.com",
		"password": "doanvana"
	},
	{
		"_id": "U10001009",
		"name": "Lê Văn A",
		"card": "163535878",
		"phoneNumber": "0174329522",
		"birthday": new Date ('1998-01-11'),
		"sex": true,
		"address": "144 Xuân Thủy, Cầu Giấy, Hà Nội",
		"image": "",
		"userName": "levana@gmail.com",
		"password": "levana"
	}
]

db.user.insert(arr);	