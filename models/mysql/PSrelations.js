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
  pid: {
    type: Sequelize.INTEGER, 
    allowNull: false,
    field: 'pid',
    references: {
      model: 'Persons',
      key: 'pid'
    }
  },
  shid: {
    type: Sequelize.INTEGER, 
    allowNull: false,
    field: 'shid',
    references: {
      model: 'Ships',
      key: 'shid'
    }
  },
  startdate: {type: Sequelize.DATE, allowNull: true},
  enddate: {type: Sequelize.DATE, allowNull: true},
  memo: {type: Sequelize.TEXT, allowNull: true}
}, {
  timestamps: false,   // don't add the timestamp attributes (updatedAt, createdAt)
  charset: 'utf8',
  collate: 'utf8_general_ci'
});

PSrelaitons.sync();

var PSrelaitonsDAO = function() {};

/**
 * 
 * implement the methods in PSrelaitonsDAO.prototype.
 * 
 */
 
module.exports = new PSrelaitonsDAO();