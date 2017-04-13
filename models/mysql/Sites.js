/**
 * @fileoverview Data model for Mysql table Sites.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-29)
 */
 
var Sequelize = require('sequelize');
var orm = require("../../utils/mysqlconn.js");
 
// OR mapping
var Sites = orm.define('Sites', {
  // auto increment, primaryKey, unique
  sid: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true, allowNull: false},
  name: {type: Sequelize.STRING, allowNull: false, unique: true},
  lat: {type: Sequelize.DOUBLE, allowNull: true},
  lng: {type: Sequelize.DOUBLE, allowNull: true},
  shortname: {type: Sequelize.STRING, allowNull: true},
  longname: {type: Sequelize.STRING, allowNull: true},
  formattedaddress: {type: Sequelize.STRING, allowNull: true}
});

Sites.sync();

var SitesDAO = function() {};

/**
 * 
 * implement the methods in SitesDAO.prototype.
 * 
 */
 
module.exports = new SitesDAO();