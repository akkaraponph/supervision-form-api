module.exports = {
	up: async (queryInterface) => {
		seedData = [
			// PREPARING_OPEN_SCHOOL
			{
				id: "e22263e9-cd10-4bd8-b040-ff550a0d1ba1",
				type: "PREPARING_OPEN_SCHOOL",
				name: "แบบฟอร์ม รายการนิเทศติดตาม การเตรียมความพร้อมการเปิดภาคเรียน",
				form_type: "RATING_SCALE",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "e22263e9-cd10-4bd8-b040-ff550a0d1ba2",
				type: "PREPARING_OPEN_SCHOOL",
				name: "แบบฟอร์ม รายการนิเทศติดตาม การดำเนินงานตามนโยบายของหน่วยงานต้นสังกัด",
				form_type: "RATING_SCALE",
				created_at: new Date(),
				updated_at: new Date()
			},
			// SUPERVISION
			{
				id: "541e70ff-0893-435d-928e-7fa07ec82f01",
				type: "SUPERVISION",
				name: "แบบตรวจสอบการพัฒนาหลักสูตรสถานศึกษา",
				form_type: "CUSTOM",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "541e70ff-0893-435d-928e-7fa07ec82f02",
				type: "SUPERVISION",
				name: "แบบตรวสอบการใช้หลักสูตรระดับชั้นเรียน",
				form_type: "CUSTOM",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "541e70ff-0893-435d-928e-7fa07ec82f03",
				type: "SUPERVISION",
				name: "แบบนิเทศ ติดตามการจัดการเรียนการสอนรายวิชาวิทยาการคำนวณ ออกแบบเทคโนโลยี และรายวิชาเกี่ยวข้องกับหุ่นยนต์",
				form_type: "QUESTION",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "541e70ff-0893-435d-928e-7fa07ec82f04",
				type: "SUPERVISION",
				name: "แบบนิเทศ ติดตาม การขับเคลื่อนการจัดการเรียนรู้ตามแนวคิดสะเต็มศึกษา (STEM Education)",
				form_type: "CUSTOM",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "541e70ff-0893-435d-928e-7fa07ec82f05",
				type: "SUPERVISION",
				name: "แบบนิเทศ ติดตามการนำศาสตร์พระราชา ไปใช้ในการจัดการเรียนรู้",
				form_type: "CUSTOM",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "541e70ff-0893-435d-928e-7fa07ec82f06",
				type: "SUPERVISION",
				name: "แบบนิเทศ ติดตาม การจัดกิจกรรมการเรียนรู้แบบ Active Learning",
				form_type: "CUSTOM",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "541e70ff-0893-435d-928e-7fa07ec82f07",
				type: "SUPERVISION",
				name: "แบบนิเทศ ติดตามการขับเคลื่อนกระบวนการ  PPLC (Piboon Professional Learning Community)",
				form_type: "CUSTOM",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "541e70ff-0893-435d-928e-7fa07ec82f08",
				type: "SUPERVISION",
				name: "แบบนิเทศ ติดตาม การดำเนินงานของโรงเรียนในโครงการโรงเรียนมาตรฐานสากล (World Class Standard School)",
				form_type: "CUSTOM",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "541e70ff-0893-435d-928e-7fa07ec82f09",
				type: "SUPERVISION",
				name: "แบบนิเทศ ติดตามการส่งเสริมนิสัยรักการอ่านและการพัฒนาห้องสมุดโรงเรียน",
				form_type: "CUSTOM",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "541e70ff-0893-435d-928e-7fa07ec82f10",
				type: "SUPERVISION",
				name: "แบบนิเทศ ติดตามการจัดกิจกรรมโรงเรียนสุจริต",
				form_type: "CUSTOM",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "541e70ff-0893-435d-928e-7fa07ec82f11",
				type: "SUPERVISION",
				name: "แบบนิเทศ ติดตาม การจัดการขยะและการลดปริมาณขยะในโรงเรียนและชุมชน",
				form_type: "QUESTION",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "541e70ff-0893-435d-928e-7fa07ec82f12",
				type: "SUPERVISION",
				name: "แบบนิเทศ ติดตาม การดำเนินงานวัดและประเมินผลการศึกษา",
				form_type: "CUSTOM",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "541e70ff-0893-435d-928e-7fa07ec83f01",
				type: "TRACKING",
				name: "แบบติดตาม ตรวจสอบความพร้อมประเมินคุณภาพภายในสถานศึกษา",
				form_type: "QUESTION",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "541e70ff-0893-435d-928e-7fa07ec83f02",
				type: "TRACKING",
				name: "แบบติดตามการนิเทศภายในและการส่งเสริมการวิจัยในโรงเรียน",
				form_type: "CUSTOM",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "541e70ff-0893-435d-928e-7fa07ec83f03",
				type: "TRACKING",
				name: "แบบติดตามการพัฒนาคุณภาพการจัดการศึกษาแบบเรียนรวม",
				form_type: "CUSTOM",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "541e70ff-0893-435d-928e-7fa07ec83f04",
				type: "TRACKING",
				name: "แบบติดตามการดำเนินการจัดการเรียนการโดยใช้สื่อเทคโนโลยี นวัตกรรมและการจัดการศึกษาทางไกล DLIT",
				form_type: "CUSTOM",
				created_at: new Date(),
				updated_at: new Date()
			}

		]
		await queryInterface.bulkInsert('supervision_form_type', seedData)
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('supervision_form_type', {});
	}
}