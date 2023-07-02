module.exports = {
	up: async (queryInterface) => {
		seedData = [
			{
				id: "e26263e9-cd10-4bd8-b040-ff550a0d5ba1",
				id_school: "231",
				name: "test",
				size: "test",
				district: "test",
				email: "test@gmail.com",
				tel: "0987263512",
				address: "test",
				junior: "test",
				senior: "test",
				director: "test",
				n_teacher: "2",
				n_personnel: "3",
				teaching_style: "test",
				open_class: "string",
				user_id: "e16263e9-cd10-4bd8-b040-ff550a0d5ba1",
				created_at: new Date(),
				updated_at: new Date(),

			}
		]
		await queryInterface.bulkInsert('school', seedData)
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('school', {});
	}
}