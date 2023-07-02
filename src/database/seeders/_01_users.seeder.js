const argon2 = require('argon2')

module.exports = {
	up: async (queryInterface) => {
		const passwordHashing = (await argon2.hash("1234"))
		userData = [
			{
				id: "e16263e9-cd10-4bd8-b040-ff550a0d5ba1",
				username: "user",
				password: passwordHashing,
				email: "test@gmail.com",
				status: "user",
				created_at: new Date(),
				updated_at: new Date(),

			}
		]
		await queryInterface.bulkInsert('user', userData)
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('user', {});
	}
}