module.exports = {
	up: async (queryInterface) => {
		seedData = [

			// การตรวจสอบองค์ประกอบของหลักสูตรสถานศึกษา
			{
				id: "848609d2-8f37-44ff-b6d1-000001c00001",
				section: '1.1 ความนำ',
				target: null,
				cf_section_id: "748609d2-8f37-44ff-b6d8-000001c00001"
			},
			{
				id: "848609d2-8f37-44ff-b6d1-000001c00002",
				section: '1.2 วิสัยทัศน์',
				target: null,
				cf_section_id: "748609d2-8f37-44ff-b6d8-000001c00001"
			},
			{
				id: "848609d2-8f37-44ff-b6d1-000001c00003",
				section: '1.3 สมรรถนะสำคัญของผู้เรียน',
				target: null,
				cf_section_id: "748609d2-8f37-44ff-b6d8-000001c00001"
			},
			{
				id: "848609d2-8f37-44ff-b6d1-000001c00004",
				section: '1.4  คุณลักษณะอันพึงประสงค์',
				target: null,
				cf_section_id: "748609d2-8f37-44ff-b6d8-000001c00001"
			},
			{
				id: "848609d2-8f37-44ff-b6d1-000002c00001",
				section: '2.1  รายวิชาพื้นฐาน ',
				target: null,
				cf_section_id: "748609d2-8f37-44ff-b6d8-000001c00002"
			},
			{
				id: "848609d2-8f37-44ff-b6d1-000002c00002",
				section: '2.2 รายวิชาเพิ่มเติม',
				target: null,
				cf_section_id: "748609d2-8f37-44ff-b6d8-000001c00002"
			},
			{
				id: "848609d2-8f37-44ff-b6d1-000002c00003",
				section: '2.3 โครงสร้างหลักสูตรชั้นปี',
				target: null,
				cf_section_id: "748609d2-8f37-44ff-b6d8-000001c00002"
			},

			
			
		]
		await queryInterface.bulkInsert('cf_sub_section', seedData)
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('cf_sub_section', {});
	}
}