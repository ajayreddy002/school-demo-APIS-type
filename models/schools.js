'use strict';
module.exports = (sequelize, DataTypes) => {
  const schools = sequelize.define('schools', {
    school_name: DataTypes.STRING,
    user_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    school_address: DataTypes.STRING
  }, {});
  schools.associate = function(models) {
    // associations can be defined here
  };
  return schools;
};