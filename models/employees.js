'use strict';
module.exports = (sequelize, DataTypes) => {
  const employees = sequelize.define('employees', {
    employee_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    school_id: DataTypes.INTEGER,
    subject: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {});
  employees.associate = function(models) {
    // associations can be defined here
  };
  return employees;
};