const argon2 = require('argon2')

module.exports = {
	up: async (queryInterface) => {
		const passwordHashing = (await argon2.hash("1234"))
		userData = [
			{
				id: "e16263e9-cd10-4bd8-b040-ff550a0d5ba1",
				username: "admin",
				password: passwordHashing,
				// email: "test@gmail.com",
				status: "admin",
				created_at: new Date(),
				updated_at: new Date(),

			},
			{
				id: "e16263e9-cd10-4bd8-b040-ff550a0d5bs1",
				username: "s1",
				password: passwordHashing,
				// email: "test2@gmail.com",
				status: "user",
				created_at: new Date(),
				updated_at: new Date(),

			},
			{
				id: "e16263e9-cd10-4bd8-b040-ff550a0d5bs2",
				username: "s2",
				password: passwordHashing,
				// email: "test2@gmail.com",
				status: "user",
				created_at: new Date(),
				updated_at: new Date(),

			},
			{
				id: "e16263e9-cd10-4bd8-b040-ff550a0d5bs3",
				username: "s3",
				password: passwordHashing,
				// email: "test2@gmail.com",
				status: "user",
				created_at: new Date(),
				updated_at: new Date(),

			},
			{
				id: "e16263e9-cd10-4bd8-b040-ff550a0d5bs4",
				username: "s4",
				password: passwordHashing,
				// email: "test2@gmail.com",
				status: "user",
				created_at: new Date(),
				updated_at: new Date(),

			},
			{
				id: "e16263e9-cd10-4bd8-b040-ff550a0d5bs5",
				username: "s5",
				password: passwordHashing,
				status: "user",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "e16263e9-cd10-4bd8-b040-ff550a0d5bs6",
				username: "s6",
				password: passwordHashing,
				status: "user",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "e16263e9-cd10-4bd8-b040-ff550a0d5bs7",
				username: "s7",
				password: passwordHashing,
				status: "user",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "e16263e9-cd10-4bd8-b040-ff550a0d5bs8",
				username: "s8",
				password: passwordHashing,
				status: "user",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "e16263e9-cd10-4bd8-b040-ff550a0d5bs9",
				username: "s9",
				password: passwordHashing,
				status: "user",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "e16263e9-cd10-4bd8-b040-ff550a0d1bs0",
				username: "s10",
				password: passwordHashing,
				status: "user",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "e16263e9-cd10-4bd8-b040-ff550a0d1bp1",
				username: "p1",
				password: passwordHashing,
				status: "personnel",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "e16263e9-cd10-4bd8-b040-ff550a0d1bp2",
				username: "p2",
				password: passwordHashing,
				status: "personnel",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "e16263e9-cd10-4bd8-b040-ff550a0d1bp3",
				username: "p3",
				password: passwordHashing,
				status: "personnel",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "e16263e9-cd10-4bd8-b040-ff550a0d1bd1",
				username: "d1",
				password: passwordHashing,
				status: "director",
				created_at: new Date(),
				updated_at: new Date(),
			},
		]
		await queryInterface.bulkInsert('user', userData)
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('user', {});
	}
}