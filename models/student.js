'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    school_id: DataTypes.INTEGER,
    student_name: DataTypes.STRING,
    parent_name: DataTypes.STRING,
    class_name: DataTypes.STRING,
    section_name: DataTypes.STRING,
    address: DataTypes.STRING,
    parent_mobile: DataTypes.STRING
  }, {});
  student.associate = function(models) {
    // associations can be defined here
  };
  return student;
};