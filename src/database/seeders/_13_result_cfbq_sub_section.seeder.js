module.exports = {
	up: async (queryInterface) => {
		// seedData = [
		// 	// แบบตรวจสอบการพัฒนาหลักสูตรสถานศึกษา : กรอบสาระท้องถิ่น มาตรฐานสากล จุดเน้นการจัดการศึกษาเพื่อการมีงานทำ
		// 	// =============== 1. ส่วนนำ ===============
		// 	{
		// 		id: "e13263e9-cd10-4bd8-b040-ff550a0d1ba1",
		// 		result: true,
		// 		remark: "คำอธิบาย",
		// 		file: null,
		// 		cfq_sub_section_id: "e10263e9-cd10-4bd8-b040-ff550a0d1ba1",
		// 		school_supervision_form_id: 'e32263e9-cd10-4bd8-b040-ff550a0d5ba2',
		// 		created_at: new Date(),
		// 		updated_at: new Date(),
		// 	},
			
		// ]
		// await queryInterface.bulkInsert('result_cfbq_sub_section', seedData)
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('result_cfbq_sub_section', {});
	}
}