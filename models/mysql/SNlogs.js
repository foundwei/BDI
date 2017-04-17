/**
 * @fileoverview Data model for Mysql table NSlogs.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-29)
 */
 
var Sequelize = require('sequelize');
var orm = require("../../utils/mysqlconn.js");
 
// OR mapping
var SNlogs = orm.define('NSlogs', {
  // auto increment, primaryKey, unique
  lid: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true, allowNull: false},
  shid: {type: Sequelize.INTEGER, allowNull: false},
  sid: {type: Sequelize.INTEGER, allowNull: false},
  startdate: {type: Sequelize.DATE, allowNull: true},
  enddate: {type: Sequelize.DATE, allowNull: true},
  memo: {type: Sequelize.STRING, allowNull: true}
}, {
  timestamps: false   // don't add the timestamp attributes (updatedAt, createdAt)
});

SNlogs.sync();

var SNlogsDAO = function() {};

/**
 * 
 * implement the methods in SNlogsDAO.prototype.
 * 
 */
 
 module.exports = new SNlogsDAO();