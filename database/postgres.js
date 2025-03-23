const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  'boystoleaders',
  'boystoleaders_user',
  'B26354!',
  {
    host: 'localhost',
    dialect: 'postgres',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to PostgreSQL database:', error);
  }
}

module.exports = {
  sequelize,
  testConnection
};