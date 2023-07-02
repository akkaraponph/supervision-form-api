module.exports = {
	up: async (queryInterface) => {
		// seedData = [
		
		// ]
		// await queryInterface.bulkInsert('news', seedData)
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('news', {});
	}
}