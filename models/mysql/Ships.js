/**
 * @fileoverview Data model for Mysql table Ships.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-29)
 */
 
var Sequelize = require('sequelize');
var orm = require("../../utils/mysqlconn.js");
var logger = require('../../utils/utils.js').logger('model-Ships');
 
// OR mapping
var Ships = orm.define('Ships', {
  // auto increment, primaryKey, unique
  shid: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true, allowNull: false},
  name: {type: Sequelize.STRING, allowNull: false},
  pennantno: {type: Sequelize.STRING, allowNull: false},
  twitter: {type: Sequelize.STRING, allowNull: true},
  facebook: {type: Sequelize.STRING, allowNull: true},
  category: {
    type: Sequelize.INTEGER, 
    allowNull: true, 
    field: 'category',
    unique: true, 
    references: {
      model: 'Categories',
      key: 'cid'
    }
  }
}, {
  timestamps: false,   // don't add the timestamp attributes (updatedAt, createdAt)
  charset: 'utf8',
  collate: 'utf8_general_ci'
});

Ships.sync();

var ShipsDAO = function() {};

/**
 * 
 * implement the methods in ShipsDAO.prototype.
 * 
 */
ShipsDAO.prototype.save = function(obj) {
  Ships.create(obj).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

ShipsDAO.prototype.update = function(shid, obj) {
  Ships.update(obj, {shid : shid}).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

ShipsDAO.prototype.delete = function(shid) {
  Ships.destroy({shid : shid}).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

/**
 * pn : page number, start from 1 not 0
 * ps : page size
 */
ShipsDAO.prototype.findAllByPage = function(pn, ps, callback) {
  Ships.findAll({limit: ps, offset: (pn - 1) * ps}).on('success', function(res) {
    callback(res);
  }).on('failure', function(err){
    logger.error(err);
  });
};

/**
 * Query all the facebook accounts in this table
 */ 
ShipsDAO.prototype.queryFB = function(callback) {
  Ships.findAll({attributes: ['facebook']}).on('success', function(res) {
    callback(res);
  }).on('failure', function(err) {
    logger.error(err);
  });
};
 
module.exports = new ShipsDAO();