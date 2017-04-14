/**
 * @fileoverview Data model for Mysql table Persons.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-29)
 */
 
var Sequelize = require('sequelize');
var orm = require("../../utils/mysqlconn.js");
 
// OR mapping
var Persons = orm.define('Persons', {
  // auto increment, primaryKey, unique
  pid: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique : true, allowNull: false},
  name: {type: Sequelize.STRING, allowNull: true},
  sex: {type: Sequelize.ENUM('0', '1'), allowNull: true},
  birthday: {type: Sequelize.DATE, allowNull: true},
  email: {type: Sequelize.STRING, allowNull: true},
  phone: {type: Sequelize.STRING, allowNull: true},
  fax: {type: Sequelize.STRING, allowNull: true},
  rank: {type: Sequelize.STRING, allowNull: true},
  division: {type: Sequelize.STRING, allowNull: true},
  flag: {type: Sequelize.INTEGER, allowNull: true},
  photo: {type: Sequelize.STRING, allowNull: true},
  street: {type: Sequelize.STRING, allowNull: true},
  city: {type: Sequelize.STRING, allowNull: true},
  state: {type: Sequelize.STRING, allowNull: true},
  zip: {type: Sequelize.STRING, allowNull: true},
  twitter: {type: Sequelize.STRING, allowNull: true},
  facebook: {type: Sequelize.STRING, allowNull: true},
  linkedin: {type: Sequelize.STRING, allowNull: true},
  remark: {type: Sequelize.TEXT, allowNull: true}
});

Persons.sync();

var PersonsDAO = function() {};

/**
 * 
 * implement the methods in PersonsDAO.prototype.
 * 
 */

module.exports = new PersonsDAO();