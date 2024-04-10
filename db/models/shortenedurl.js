'use strict';
// model to allow db operations
const {
  Model, Sequelize
} = require('sequelize');
const sequelize = require('../../config/database');
module.exports = sequelize.define('shortenedurls', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  full_url: {
    type: Sequelize.STRING
  },
  shortened_url: {
    type: Sequelize.STRING,
    unique: true,
  },
  visits: {
    type: Sequelize.INTEGER
  },
  created_at: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updated_at: {
    allowNull: false,
    type: Sequelize.DATE
  },
  deleted_at: {
    type: Sequelize.DATE
  }
}
  , {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    underscored: true,
    paranoid: true,
    modelName: 'shortenedurl',
    tableName: 'shortened_urls'
  },
);