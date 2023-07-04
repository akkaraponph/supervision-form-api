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
		

			// 1.3  แบบนิเทศ ติดตามการจัดการเรียนการสอนรายวิชาวิทยาการคำนวณ ออกแบบเทคโนโลยี และรายวิชาเกี่ยวข้องกับหุ่นยนต์
			{
				id: "748609d2-8f37-44ff-b6d1-000003c00001",
				section: 'รายวิชาวิทยาการคำนวณมีการจัดการเรียนรู้รายวิชาวิทยาการ คำนวณ',
				have_sub_section: false,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf03"
			},
			{
				id: "748609d2-8f37-44ff-b6d1-000003c00002",
				section: 'รายวิชาออกแบบเทคโนโลยี',
				have_sub_section: false,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf03"
			},
			{
				id: "748609d2-8f37-44ff-b6d1-000003c00003",
				section: 'รายวิชาเกี่ยวข้องกับหุ่นยนต์',
				have_sub_section: false,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf03"
			},
			// 1.4  แบบนิเทศ ติดตาม การขับเคลื่อนการจัดการเรียนรู้ตามแนวคิดสะเต็มศึกษา (STEM Education) 
			{
				id: "748609d2-8f37-44ff-b6d1-000004c00001",
				section: '1.  ผู้ให้ข้อมูล',
				have_sub_section: false,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf04"
			},
			{
				id: "748609d2-8f37-44ff-b6d1-000004c00002",
				section: '2.  ด้านการบริหารจัดการเพื่อขับเคลื่อนการจัดกิจกรรมการเรียนรู้สะเต็มศึกษา (STEM Education)',
				have_sub_section: false,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf04"
			},
			{
				id: "748609d2-8f37-44ff-b6d1-000004c00003",
				section: '3. ด้านการพัฒนาครูในการจัดกิจกรรมการเรียนรู้สะเต็มศึกษา (STEM Education)',
				have_sub_section: false,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf04"
			},
			{
				id: "748609d2-8f37-44ff-b6d1-000004c00004",
				section: '4. ด้านการจัดกิจกรรมการเรียนรู้สะเต็มศึกษา (STEM Education)',
				have_sub_section: true,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf04"
			},
			{
				id: "748609d2-8f37-44ff-b6d1-000004c00005",
				section: '5.  ด้านสื่อ วัสดุอุปกรณ์และแหล่งเรียนรู้สะเต็มศึกษา (STEM Education)',
				have_sub_section: true,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf04"
			},
			{
				id: "748609d2-8f37-44ff-b6d1-000004c00006",
				section: '6. ด้านผลงานที่เกิดขึ้นจากการจัดกิจกรรมการเรียนรู้สะเต็มศึกษา (STEM Education)',
				have_sub_section: false,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf04"
			},
			{
				id: "748609d2-8f37-44ff-b6d1-000004c00007",
				section: '7. ด้านปัญหาและความต้องการของโรงเรียนในการจัดกิจกรรมการเรียนรู้สะเต็มศึกษา (STEM Education)',
				have_sub_section: false,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf04"
			},
		]
		await queryInterface.bulkInsert('cf_section', seedData)
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('cf_section', {});
	}
}