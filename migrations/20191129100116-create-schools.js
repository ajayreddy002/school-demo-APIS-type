'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('schools', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      school_name: {
        type: Sequelize.STRING(200)
      },
      user_name: {
        type: Sequelize.STRING(150)
      },
      email: {
        type: Sequelize.STRING(256),
        unique: true
      },
      password: {
        type: Sequelize.STRING(200)
      },
      phone_number: {
        type: Sequelize.STRING(20),
        unique: true
      },
      school_address: {
        type: Sequelize.STRING(300)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('schools');
  }
};