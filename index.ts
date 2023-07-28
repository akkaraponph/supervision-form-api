import db from "./src/database/models";
import App from "./src/app";
import config from "./src/common/config/common.config";
import dotenv from "dotenv";
dotenv.config();
const app = App();

// Function to sync the database
const syncDatabase = async () => {
  try {
    const syncOptions = {
      // logging: process.env.NODE_ENV === "production", // Mute sync log output in production
      logging: true,
      force: process.env.NODE_ENV !== "production" || process.env.DB_SYNC_FORCE === "true", // Disable force sync in production unless DB_SYNC_FORCE is set to true
    };

    await db.sequelize.sync(syncOptions);
    console.log("Database synced successfully");
  } catch (error) {
    console.error("Error Sync database:", error);
  }
};

// Function to start the server
const startServer = () => {
  app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
  });
};

// Run the database synchronization first, then start the server
const runServer = async () => {
  try {
    await syncDatabase();
    startServer();
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

runServer();
