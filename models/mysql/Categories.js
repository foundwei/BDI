/**
 * @fileoverview Data model for Mysql table Categories.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-29)
 */
 
var Sequelize = require('sequelize');
var orm = require("../../utils/mysqlconn.js");
 
// OR mapping
var Categories = orm.define('Categories', {
  // auto increment, primaryKey, unique
  cid: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true, allowNull: false},
  name: {type: Sequelize.STRING},
  memo: {type: Sequelize.STRING, allowNull: true}
});

Categories.sync();

var CategoriesDAO = function() {};

/**
 * 
 * implement the methods in CategoriesDAO.prototype.
 * 
 */
 
module.exports = new CategoriesDAO();