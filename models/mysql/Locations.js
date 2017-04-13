/**
 * @fileoverview Data model for Mysql table Locations.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-29)
 */
 
var Sequelize = require('sequelize');
var orm = require("../../utils/mysqlconn.js");

// OR mapping
var Locations = orm.define('Locations', {
  // auto increment, primaryKey, unique
  lid: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true, allowNull: false},
  shid: {type: Sequelize.INTEGER, allowNull: false},
  sid: {type: Sequelize.INTEGER, allowNull: false},
  startdate: {type: Sequelize.DATE, allowNull: true},
  enddate: {type: Sequelize.DATE, allowNull: true},
  memo: {type: Sequelize.TEXT, allowNull: true}
});

Locations.sync();

var LocationsDAO = function() {};

/**
 * 
 * implement the methods in LocationsDAO.prototype.
 * 
 */
 
module.exports = new LocationsDAO();