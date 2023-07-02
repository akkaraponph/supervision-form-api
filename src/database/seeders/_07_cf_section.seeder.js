module.exports = {
	up: async (queryInterface) => {
		seedData = [
			// การตรวจสอบองค์ประกอบของหลักสูตรสถานศึกษา
			{
				id: "748609d2-8f37-44ff-b6d8-000001c00001",
				section: '1. ส่วนนำ',
				have_sub_section: true,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf01"
			},
			{
				id: "748609d2-8f37-44ff-b6d8-000001c00002",
				section: '2. โครงสร้างหลักสูตรสถานศึกษา',
				have_sub_section: true,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf01"
			},
			{
				id: "748609d2-8f37-44ff-b6d8-000001c00003",
				section: '3. คำอธิบายรายวิชา',
				have_sub_section: true,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf01"
			},
			{
				id: "748609d2-8f37-44ff-b6d8-000001c00004",
				section: '4. กิจกรรมพัฒนาผู้เรียน',
				have_sub_section: true,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf01"
			},
			{
				id: "748609d2-8f37-44ff-b6d8-000001c00005",
				section: '5. เกณฑ์การจบการศึกษา',
				have_sub_section: true,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf01"
			},
		
		
			// แบบตรวจสอบการใช้หลักสูตรระดับชั้นเรียน   
			{
				id: "748609d2-8f37-44ff-b6d1-000002c00001",
				section: 'ตอนที่  1 โครงสร้างรายวิชา',
				have_sub_section: true,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf02"
			},
			{
				id: "748609d2-8f37-44ff-b6d1-000002c00002",
				section: 'ตอนที่  2  หน่วยการเรียนรู้',
				have_sub_section: true,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf02"
			},
			{
				id: "748609d2-8f37-44ff-b6d1-000002c00003",
				section: 'ตอนที่ 3 แผนจัดการเรียนรู้',
				have_sub_section: false,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf02"
			},
		
			
		]
		await queryInterface.bulkInsert('cf_section', seedData)
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('cf_section', {});
	}
}