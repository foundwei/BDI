/**
 * @fileoverview Data model for Mysql table Ships.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-29)
 */
 
var Sequelize = require('sequelize');
var orm = require("../../utils/mysqlconn.js");
 
// OR mapping
var Ships = orm.define('Ships', {
  // auto increment, primaryKey, unique
  shid: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true, allowNull: false},
  name: {type: Sequelize.STRING, allowNull: false},
  pennantno: {type: Sequelize.STRING, allowNull: false},
  twitter: {type: Sequelize.STRING, allowNull: false},
  facebook: {type: Sequelize.STRING, allowNull: false},
  category: {type: Sequelize.INTEGER, allowNull: true}
});

Ships.sync();

var ShipsDAO = function() {};

/**
 * 
 * implement the methods in ShipsDAO.prototype.
 * 
 */
 
module.exports = new ShipsDAO();