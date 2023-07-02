module.exports = {
	up: async (queryInterface) => {
		seedData = [
			// 1.3 แบบนิเทศ ติดตามการจัดการเรียนการสอนรายวิชาวิทยาการคำนวณ ออกแบบเทคโนโลยี และรายวิชาเกี่ยวข้องกับหุ่นยนต์
			{
				id: "16140938-0aaf-4b79-87d0-50781132c001",
				result: true,
				file: null,
				created_at: new Date(),
				updated_at: new Date(),
				qf_id: "15140938-0aaf-4b79-87d0-50781132c001",
			},
			{
				id: "16140938-0aaf-4b79-87d0-50781132c002",
				result: true,
				file: null,
				created_at: new Date(),
				updated_at: new Date(),
				qf_id: "15140938-0aaf-4b79-87d0-50781132c002",
			},
			{
				id: "16140938-0aaf-4b79-87d0-50781132c003",
				result: true,
				file: null,
				created_at: new Date(),
				updated_at: new Date(),
				qf_id: "15140938-0aaf-4b79-87d0-50781132c003",
			},
			{
				id: "16140938-0aaf-4b79-87d0-50781132c004",
				result: true,
				file: null,
				created_at: new Date(),
				updated_at: new Date(),
				qf_id: "15140938-0aaf-4b79-87d0-50781132c004",
			},
			{
				id: "16140938-0aaf-4b79-87d0-50781132c005",
				result: true,
				file: null,
				created_at: new Date(),
				updated_at: new Date(),
				qf_id: "15140938-0aaf-4b79-87d0-50781132c005",
			},
			{
				id: "16140938-0aaf-4b79-87d0-50781132c006",
				result: true,
				file: null,
				created_at: new Date(),
				updated_at: new Date(),
				qf_id: "15140938-0aaf-4b79-87d0-50781132c006",
			},
			{
				id: "16140938-0aaf-4b79-87d0-50781132c007",
				result: true,
				file: null,
				created_at: new Date(),
				updated_at: new Date(),
				qf_id: "15140938-0aaf-4b79-87d0-50781132c007",
			},
			{
				id: "16140938-0aaf-4b79-87d0-50781132c008",
				result: true,
				file: null,
				created_at: new Date(),
				updated_at: new Date(),
				qf_id: "15140938-0aaf-4b79-87d0-50781132c008",
			},
			{
				id: "16140938-0aaf-4b79-87d0-50781132c009",
				result: true,
				file: null,
				created_at: new Date(),
				updated_at: new Date(),
				qf_id: "15140938-0aaf-4b79-87d0-50781132c009",
			},
			{
				id: "16140938-0aaf-4b79-87d0-50781132c010",
				result: true,
				file: null,
				created_at: new Date(),
				updated_at: new Date(),
				qf_id: "15140938-0aaf-4b79-87d0-50781132c010",
			},
			{
				id: "16140938-0aaf-4b79-87d0-50781132c011",
				result: true,
				file: null,
				created_at: new Date(),
				updated_at: new Date(),
				qf_id: "15140938-0aaf-4b79-87d0-50781132c011",
			},
			{
				id: "16140938-0aaf-4b79-87d0-50781132c012",
				result: true,
				file: null,
				created_at: new Date(),
				updated_at: new Date(),
				qf_id: "15140938-0aaf-4b79-87d0-50781132c012",
			},
		]
		await queryInterface.bulkInsert('result_qfbq', seedData)
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('result_qfbq', {});
	}
}