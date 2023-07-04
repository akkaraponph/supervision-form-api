module.exports = {
	up: async (queryInterface) => {
		seedData = [
			{
				id: "e31263e9-cd10-4bd8-b040-ff550a0d1ba1",
				name: "แบบฟอร์ม รายการนิเทศติดตาม การเตรียมความพร้อมการเปิดภาคเรียนที่ 1 ปีการศึกษา 2566",
				detail: "-",
				term: "2",
				year: "2566",
				suggestion: "-",
				supervisor_name: "-",
				supervision_form_type_id: "e22263e9-cd10-4bd8-b040-ff550a0d1ba1",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "e31263e9-cd10-4bd8-b040-ff550a0d1ba2",
				name: "รายการนิเทศ ติดตาม การดำเนินงานตามนโยบายของหน่วยงานต้นสังกัด  1 ปีการศึกษา 2566",
				detail: "-",
				term: "2",
				year: "2566",
				suggestion: "-",
				supervisor_name: "-",
				supervision_form_type_id: "e22263e9-cd10-4bd8-b040-ff550a0d1ba2",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "d2494a78-a8a6-40a8-a6ce-64b12982cf01",
				name: "แบบตรวจสอบการพัฒนาหลักสูตรสถานศึกษา : กรอบสาระท้องถิ่น มาตรฐานสากล จุดเน้นการจัดการศึกษาเพื่อการมีงานทำ",
				detail: "-",
				suggestion: "-",
				supervisor_name: "-",
				term: "1",
				year: "2566",
				supervision_form_type_id: "541e70ff-0893-435d-928e-7fa07ec82f01",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "d2494a78-a8a6-40a8-a6ce-64b12982cf02",
				name: "แบบตรวสอบการใช้หลักสูตรระดับชั้นเรียน ภาคเรียนที่ 1 ปีการศึกษา 2566",
				detail: "-",
				suggestion: "-",
				supervisor_name: "-",
				term: "1",
				year: "2566",
				supervision_form_type_id: "541e70ff-0893-435d-928e-7fa07ec82f02",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "d2494a78-a8a6-40a8-a6ce-64b12982cf03",
				name: "แบบนิเทศ ติดตามการจัดการเรียนการสอนรายวิชาวิทยาการคำนวณ ออกแบบเทคโนโลยี และรายวิชาเกี่ยวข้องกับหุ่นยนต์ ภาคเรียนที่ 1 ปีการศึกษา 2566",
				detail: "-",
				suggestion: "-",
				supervisor_name: "-",
				term: "1",
				year: "2566",
				supervision_form_type_id: "541e70ff-0893-435d-928e-7fa07ec82f03",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "d2494a78-a8a6-40a8-a6ce-64b12982cf04",
				name: "1.4  แบบนิเทศ ติดตาม การขับเคลื่อนการจัดการเรียนรู้ตามแนวคิดสะเต็มศึกษา (STEM Education) ",
				detail: "-",
				suggestion: "-",
				supervisor_name: "-",
				term: "1",
				year: "2565",
				supervision_form_type_id: "541e70ff-0893-435d-928e-7fa07ec82f04",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "d2494a78-a8a6-40a8-a6ce-64b12982cf11",
				name: "แบบนิเทศ ติดตาม การจัดการขยะและการลดปริมาณขยะในโรงเรียนและชุมชน ภาคเรียนที่ 1 ปีการศึกษา 2566",
				detail: "เอกสารฉบับนี้จัดทำขึ้นเพื่อนิเทศ ติดตามการจัดกิจกรรมการเรียนรู้สะเต็มศึกษา  (STEM Education) ของโรงเรียน สังกัดสำนักงานเขตพื้นที่การศึกษามัธยมศึกษาสกลนคร  ในปีการศึกษา  2565 ที่ผ่านมา ขอความร่วมมือในการกรอกข้อมูลตามความเป็นจริง เพื่อเป็นประโยชน์ในการส่งเสริมและพัฒนาการจัดกิจกรรมการเรียนรู้สะเต็มศึกษา  (STEM Education)  ของสำนักงานเขตพื้นที่การศึกษามัธยมศึกษาสกลนคร ต่อไป",
				suggestion: "-",
				supervisor_name: "-",
				term: "1",
				year: "2565",
				supervision_form_type_id: "541e70ff-0893-435d-928e-7fa07ec82f11",
				created_at: new Date(),
				updated_at: new Date(),
			},
		
			
		]
		await queryInterface.bulkInsert('supervision_form', seedData)
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('supervision_form', {});
	}
}