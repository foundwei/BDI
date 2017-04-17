/**
 * @fileoverview Data model for Mysql table Users.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-29)
 */

var Sequelize = require('sequelize');
var orm = require("../../utils/mysqlconn.js");
 
// OR mapping
var Users = orm.define('Users', {
  // auto increment, primaryKey, unique
  uid: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true, allowNull: false},
  username: {type: Sequelize.STRING, allowNull: false, unique: true},
  password: {type: Sequelize.STRING, allowNull: false},
  memo: {type: Sequelize.STRING, allowNull: true}
}, {
  timestamps: false   // don't add the timestamp attributes (updatedAt, createdAt)
});

Users.sync();

var UsersDAO = function() {};

/**
 * 
 * implement the methods in UsersDAO.prototype.
 * 
 */
 
module.exports = new UsersDAO();