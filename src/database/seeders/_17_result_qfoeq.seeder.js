module.exports = {
	up: async (queryInterface) => {
		// seedData = [
		
		// ]
		// await queryInterface.bulkInsert('result_qfoeq', seedData)
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('result_qfoeq', {});
	}
}