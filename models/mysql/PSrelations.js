/**
 * @fileoverview Data model for Mysql table PSrelaitons.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-29)
 */
 
var Sequelize = require('sequelize');
var orm = require("../../utils/mysqlconn.js");
 
// OR mapping
var PSrelaitons = orm.define('PSrelaitons', {
  // auto increment, primaryKey, unique
  psid: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true, allowNull: false},
  pid: {type: Sequelize.INTEGER, allowNull: false},
  shid: {type: Sequelize.INTEGER, allowNull: false},
  startdate: {type: Sequelize.DATE, allowNull: true},
  enddate: {type: Sequelize.DATE, allowNull: true},
  memo: {type: Sequelize.TEXT, allowNull: true}
});

PSrelaitons.sync();

var PSrelaitonsDAO = function() {};

/**
 * 
 * implement the methods in PSrelaitonsDAO.prototype.
 * 
 */
 
module.exports = new PSrelaitonsDAO();