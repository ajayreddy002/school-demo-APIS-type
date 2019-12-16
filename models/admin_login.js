'use strict';
module.exports = (sequelize, DataTypes) => {
  const admin_login = sequelize.define('admin_login', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING
  }, {});
  admin_login.associate = function(models) {
    // associations can be defined here
  };
  return admin_login;
};