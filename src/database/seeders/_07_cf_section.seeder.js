module.exports = {
	up: async (queryInterface) => {
		seedData = [
			// การตรวจสอบองค์ประกอบของหลักสูตรสถานศึกษา
			{
				id: "748609d2-8f37-44ff-b6d8-000001c00001",
				section: '1. ส่วนนำ',
				priority: "1",
				have_sub_section: true,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf01"
			},
			{
				id: "748609d2-8f37-44ff-b6d8-000001c00002",
				section: '2. โครงสร้างหลักสูตรสถานศึกษา',
				priority: "2",
				have_sub_section: true,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf01"
			},
			{
				id: "748609d2-8f37-44ff-b6d8-000001c00003",
				section: '3. คำอธิบายรายวิชา',
				priority: "3",
				have_sub_section: true,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf01"
			},
			{
				id: "748609d2-8f37-44ff-b6d8-000001c00004",
				section: '4. กิจกรรมพัฒนาผู้เรียน',
				priority: "4",
				have_sub_section: true,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf01"
			},
			{
				id: "748609d2-8f37-44ff-b6d8-000001c00005",
				section: '5. เกณฑ์การจบการศึกษา',
				priority: "5",
				have_sub_section: true,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf01"
			},
		
		
			// แบบตรวจสอบการใช้หลักสูตรระดับชั้นเรียน   
			{
				id: "748609d2-8f37-44ff-b6d1-000002c00001",
				section: 'ตอนที่  1 โครงสร้างรายวิชา',
				priority: "1",
				have_sub_section: true,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf02"
			},
			{
				id: "748609d2-8f37-44ff-b6d1-000002c00002",
				section: 'ตอนที่  2  หน่วยการเรียนรู้',
				priority: "2",
				have_sub_section: true,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf02"
			},
			{
				id: "748609d2-8f37-44ff-b6d1-000002c00003",
				section: 'ตอนที่ 3 แผนจัดการเรียนรู้',
				priority: "3",
				have_sub_section: false,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf02"
			},
		

			// 1.3  แบบนิเทศ ติดตามการจัดการเรียนการสอนรายวิชาวิทยาการคำนวณ ออกแบบเทคโนโลยี และรายวิชาเกี่ยวข้องกับหุ่นยนต์
			{
				id: "748609d2-8f37-44ff-b6d1-000003c00001",
				priority: "1",
				section: 'รายวิชาวิทยาการคำนวณมีการจัดการเรียนรู้รายวิชาวิทยาการ คำนวณ',
				have_sub_section: false,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf03"
			},
			{
				id: "748609d2-8f37-44ff-b6d1-000003c00002",
				priority: "2",
				section: 'รายวิชาออกแบบเทคโนโลยี',
				have_sub_section: false,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf03"
			},
			{
				id: "748609d2-8f37-44ff-b6d1-000003c00003",
				priority: "3",
				section: 'รายวิชาเกี่ยวข้องกับหุ่นยนต์',
				have_sub_section: false,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf03"
			},
			// 1.4  แบบนิเทศ ติดตาม การขับเคลื่อนการจัดการเรียนรู้ตามแนวคิดสะเต็มศึกษา (STEM Education) 
			{
				id: "748609d2-8f37-44ff-b6d1-000004c00001",
				priority: "1",
				section: '1.  ผู้ให้ข้อมูล',
				have_sub_section: true,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf04"
			},
			{
				id: "748609d2-8f37-44ff-b6d1-000004c00002",
				priority: "2",
				section: '2.  ด้านการบริหารจัดการเพื่อขับเคลื่อนการจัดกิจกรรมการเรียนรู้สะเต็มศึกษา (STEM Education)',
				have_sub_section: false,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf04"
			},
			{
				id: "748609d2-8f37-44ff-b6d1-000004c00003",
				priority: "3",
				section: '3. ด้านการพัฒนาครูในการจัดกิจกรรมการเรียนรู้สะเต็มศึกษา (STEM Education)',
				have_sub_section: false,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf04"
			},
			{
				id: "748609d2-8f37-44ff-b6d1-000004c00004",
				priority: "4",
				section: '4. ด้านการจัดกิจกรรมการเรียนรู้สะเต็มศึกษา (STEM Education)',
				have_sub_section: true,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf04"
			},
			{
				id: "748609d2-8f37-44ff-b6d1-000004c00005",
				priority: "5",
				section: '5.  ด้านสื่อ วัสดุอุปกรณ์และแหล่งเรียนรู้สะเต็มศึกษา (STEM Education)',
				have_sub_section: true,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf04"
			},
			{
				id: "748609d2-8f37-44ff-b6d1-000004c00006",
				priority: "6",
				section: '6. ด้านผลงานที่เกิดขึ้นจากการจัดกิจกรรมการเรียนรู้สะเต็มศึกษา (STEM Education)',
				have_sub_section: false,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf04"
			},
			{
				id: "748609d2-8f37-44ff-b6d1-000004c00007",
				priority: "7",
				section: '7. ด้านปัญหาและความต้องการของโรงเรียนในการจัดกิจกรรมการเรียนรู้สะเต็มศึกษา (STEM Education)',
				have_sub_section: false,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf04"
			},

			// 1.6  แบบนิเทศ ติดตาม การจัดกิจกรรมการเรียนรู้แบบ Active Learning
			{
				id: "748609d2-8f37-44ff-b6d1-500001c00001",
				priority: "1",
				section: 'ด้านครูผู้สอน',
				have_sub_section: false,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf05"
			},
			{
				id: "748609d2-8f37-44ff-b6d1-500001c00002",
				priority: "2",
				section: 'ด้านผู้เรียน',
				have_sub_section: false,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf05"
			},
			{
				id: "748609d2-8f37-44ff-b6d1-500001c00003",
				priority: "3",
				section: 'ด้านกระบวนการ',
				have_sub_section: false,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf05"
			},

			// 1.7  แบบนิเทศ ติดตามการขับเคลื่อนกระบวนการ  PPLC (Piboon Professional Learning Community)
			{
				id: "748609d2-8f37-44ff-b6d1-700001c00001",
				priority: "1",
				section: '1.  การแต่งตั้งคณะกรรมการขับเคลื่อนกระบวนการ PLC ระดับสถานศึกษา',
				have_sub_section: false,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf07"
			},
			{
				id: "748609d2-8f37-44ff-b6d1-700001c00002",
				priority: "2",
				section: '2. การกำหนดแผนงานการขับเคลื่อนกระบวนการ PLC ระดับสถานศึกษา',
				have_sub_section: false,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf07"
			},
			{
				id: "748609d2-8f37-44ff-b6d1-700001c00003",
				priority: "3",
				section: '3. การขับเคลื่อนกระบวนการ PPLC สู่การปฏิบัติในสถานศึกษา',
				have_sub_section: false,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf07"
			},
			{
				id: "748609d2-8f37-44ff-b6d1-700001c00004",
				priority: "4",
				section: '4. กิจกรรม PPLC ที่สามารถเป็น Best practice ของแต่ละกลุ่มสาระการเรียนรู้/กลุ่มกิจกรรมพัฒนาผู้เรียน (ในแต่ละกลุ่มสาระการเรียนรู้อาจจะมีมากกว่า 1 กิจกรรม)',
				have_sub_section: false,
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf07"
			},

		
			

		]
		await queryInterface.bulkInsert('cf_section', seedData)
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('cf_section', {});
	}
}