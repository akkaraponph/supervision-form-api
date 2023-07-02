module.exports = {
	up: async (queryInterface) => {
		// seedData = [
		
		// ]
		// await queryInterface.bulkInsert('personnel', seedData)
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('personnel', {});
	}
}