module.exports = {
	up: async (queryInterface) => {
		// seedData = [
		// 	// แบบตรวจสอบการพัฒนาหลักสูตรสถานศึกษา : กรอบสาระท้องถิ่น มาตรฐานสากล จุดเน้นการจัดการศึกษาเพื่อการมีงานทำ
		
		// 	{
		// 		id: "e11263e9-cd10-4bd8-b040-ff550a0d1ba1",
		// 		result: true,
		// 		remark: "คำอธิบาย",
		// 		file: null,
		// 		cfq_section_id: "098609d2-8f37-44ff-b6d0-000003c00001",
		// 		school_supervision_form_id: 'e32263e9-cd10-4bd8-b040-ff550a0d5ba2',
		// 		created_at: new Date(),
		// 		updated_at: new Date(),
		// 	},
			
		// ]
		// await queryInterface.bulkInsert('result_cfbq_section', seedData)
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('result_cfbq_section', {});
	}
}