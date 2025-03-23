// database/models/UserActivity.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../postgres');

const UserActivity = sequelize.define('UserActivity', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  activityType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  metadata: {
    type: DataTypes.JSONB,
    defaultValue: {}
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  indexes: [
    { fields: ['userId'] },
    { fields: ['activityType'] },
    { fields: ['timestamp'] }
  ]
});

module.exports = UserActivity;