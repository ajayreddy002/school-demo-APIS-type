'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employee_name: {
        type: Sequelize.STRING(150)
      },
      email: {
        type: Sequelize.STRING(256),
        unique: true
      },
      password: {
        type: Sequelize.STRING(200)
      },
      school_id: {
        type: Sequelize.INTEGER(100)
      },
      subject: {
        type: Sequelize.STRING(150)
      },
      phone_number: {
        type: Sequelize.STRING(20),
        unique: true
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
    return queryInterface.dropTable('employees');
  }
};