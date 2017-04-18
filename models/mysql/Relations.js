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
  pid1: {
    type: Sequelize.INTEGER, 
    allowNull: false,
    field: 'pid1',
    references: {
      model: 'Persons',
      key: 'pid'
    }
  },
  pid2: {
    type: Sequelize.INTEGER, 
    allowNull: false,
    field: 'pid2',
    references: {
      model: 'Persons',
      key: 'pid'
    }
  },
  relation: {type: Sequelize.STRING, allowNull: false}
}, {
  timestamps: false,   // don't add the timestamp attributes (updatedAt, createdAt)
  charset: 'utf8',
  collate: 'utf8_general_ci'
});

Relaitons.sync();

var RelaitonsDAO = function() {};

/**
 * 
 * implement the methods in RelaitonsDAO.prototype.
 * 
 */
 
module.exports = new RelaitonsDAO();