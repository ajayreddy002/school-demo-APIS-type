'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      school_id: {
        type: Sequelize.INTEGER
      },
      student_name: {
        type: Sequelize.STRING(150)
      },
      parent_name: {
        type: Sequelize.STRING(150)
      },
      class_name: {
        type: Sequelize.STRING(100)
      },
      section_name: {
        type: Sequelize.STRING(100)
      },
      address: {
        type: Sequelize.STRING(300)
      },
      parent_mobile: {
        type: Sequelize.STRING(20)
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
    return queryInterface.dropTable('students');
  }
};