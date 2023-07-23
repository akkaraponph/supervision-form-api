module.exports = {
	up: async (queryInterface) => {
		seedData = [
		{
			id: "string",
			name: "string",
			description: "string",
			editor: "string",
			content: "string",
			link: "string",
			img1: "string",
			img2: "string",
			img3: "string",
			img4: "string",
			img5: "string",
			created_at: new Date(),
			updated_at: new Date(),
		}
		]
		await queryInterface.bulkInsert('news', seedData)
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('news', {});
	}
}