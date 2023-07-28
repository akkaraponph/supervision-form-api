module.exports = {
	up: async (queryInterface) => {
		seedData = [
			{
				id: "18140938-0aaf-4b79-87d0-50781132c001",
				id_personnel: "19283817283812",
				name: "9 ABC",
				lastname: "DEF",
				position: "GH",
				group: "I",
				email: "GK@ML.com",
				address: "OP",
				tel: "09273827123",
				image: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
				created_at: new Date(),
				updated_at: new Date(),
				user_id: "e16263e9-cd10-4bd8-b040-ff550a0d5ba1",
			},
		]
		await queryInterface.bulkInsert('personnel', seedData)
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('personnel', {});
	}
}