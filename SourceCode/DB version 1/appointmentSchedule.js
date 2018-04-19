var arr = [	
	{
		"scheduleId": "SCH00000001",
		"doctorId": "DOC10001000",
		"patientId": "PAT10001000",
		"time": new Date ('2018-01-01'),
		"address": "Khu khám bệnh, bệnh viện X",
		"description": "",
		"acceptance": true
	},
	{
		"scheduleId": "SCH00000002",
		"doctorId": "DOC10001000",
		"patientId": "PAT10001001",
		"time": new Date ('2018-01-11'),
		"address": "Khu khám bệnh, bệnh viện X",
		"description": "",
		"acceptance": false
	}
]

db.appointmentSchedule.insert(arr);	