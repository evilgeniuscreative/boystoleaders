// scripts/initDB.js
const { sequelize } = require('../database/postgres');
const UserActivity = require('../database/models/UserActivity');

async function initDatabase() {
  try {
    // Sync all models
    await sequelize.sync({ alter: true });
    console.log('Database synchronized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    process.exit();
  }
}

initDatabase();