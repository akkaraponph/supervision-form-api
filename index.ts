import db from "./src/database/models"
import App from "./src/app"
import config from "./src/common/config/common.config"
import dotenv from "dotenv";
dotenv.config();
const app = App()

const runServer = async () => {
	try {
		const syncOptions = {
			logging: process.env.NODE_ENV !== 'production', // Mute sync log output in production
			// logging: process.env.NODE_ENV == 'production', // Mute sync log output in production
			force: process.env.NODE_ENV !== 'production' || process.env.DB_SYNC_FORCE === 'true', // Disable force sync in production unless DB_SYNC_FORCE is set to true
		}
		await db.sequelize.sync(syncOptions);
		console.log("Database synced successfully")
		app.listen(config.port, () => {
			console.log(`server is running on port ${config.port}`)
		})
	} catch (error) {
		console.error(` Error Sync database`)
	}

}

runServer()
