/**
 * @fileoverview Data model for Mysql table Relations.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-29)
 */
 
var Sequelize = require('sequelize');
var orm = require("../../utils/mysqlconn.js");
 
// OR mapping
var Relaitons = orm.define('Relaitons', {
  // auto increment, primaryKey, unique
  rid: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true, allowNull: false},
  pid1: {type: Sequelize.INTEGER, allowNull: false},
  pid2: {type: Sequelize.INTEGER, allowNull: false},
  relation: {type: Sequelize.STRING, allowNull: false}
}, {
  timestamps: false   // don't add the timestamp attributes (updatedAt, createdAt)
});

Relaitons.sync();

var RelaitonsDAO = function() {};

/**
 * 
 * implement the methods in RelaitonsDAO.prototype.
 * 
 */
 
module.exports = new RelaitonsDAO();