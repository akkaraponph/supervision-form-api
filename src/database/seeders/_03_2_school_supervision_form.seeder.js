module.exports = {
	up: async (queryInterface) => {
		seedData = [
			{
				id: "e32263e9-cd10-4bd8-b040-ff550a0d5ba1",
				term: "1",
				year: "2566",
				school_id: 'e26263e9-cd10-4bd8-b040-ff550a0d5ba1',
				supervision_form_id: "e31263e9-cd10-4bd8-b040-ff550a0d1ba1",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "e32263e9-cd10-4bd8-b040-ff550a0d5ba2",
				term: "1",
				year: "2566",
				school_id: 'e26263e9-cd10-4bd8-b040-ff550a0d5ba1',
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf02",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "e32263e9-cd10-4bd8-b040-ff550a0d5ba3",
				term: "1",
				year: "2566",
				school_id: 'e26263e9-cd10-4bd8-b040-ff550a0d5ba1',
				supervision_form_id: "d2494a78-a8a6-40a8-a6ce-64b12982cf11",
				created_at: new Date(),
				updated_at: new Date(),
			}
		]
		await queryInterface.bulkInsert('school_supervision_form', seedData)
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('school_supervision_form', {});
	}
}