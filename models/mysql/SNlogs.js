/**
 * @fileoverview Data model for Mysql table NSlogs.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-29)
 */
 
var Sequelize = require('sequelize');
var orm = require("../../utils/mysqlconn.js");
var logger = require('../../utils/utils.js').logger('model-SNlogs');
 
// OR mapping
var SNlogs = orm.define('NSlogs', {
  // auto increment, primaryKey, unique
  snid: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true, allowNull: false},
  account: {type: Sequelize.STRING, allowNull: false},
  lasttime: {type: Sequelize.DATE, allowNull: true},
  reserved: {type: Sequelize.STRING, allowNull: true}
}, {
  timestamps: false,   // don't add the timestamp attributes (updatedAt, createdAt)
  charset: 'utf8',
  collate: 'utf8_general_ci'
});

SNlogs.sync();

var SNlogsDAO = function() {};

/**
 * 
 * implement the methods in SNlogsDAO.prototype.
 * 
 */

/**
 * find the last one information of a specific account
 * accname: account
 */ 
SNlogsDAO.prototype.findOneByAccount = function(accname, callback) {
  SNlogs.findOne({where: {account: accname}}).then(function(snlog) {
    callback(snlog);
  });
};

/**
 * find the last one information of a specific facebook account
 * accname: account
 */ 
SNlogsDAO.prototype.findOneByFBAccount = function(accname, callback) {
  SNlogs.findOne({where: {account: accname, reserved: 'fb'}}).then(function(snlog) {
    callback(snlog);
  });
};

SNlogsDAO.prototype.upsertByAccount = function(object) {
  SNlogs.upsert(object);
};

SNlogsDAO.prototype.save = function(obj) {
  SNlogs.create(obj).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

SNlogsDAO.prototype.update = function(snid, obj) {
  SNlogs.update(obj, {snid : snid}).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

SNlogsDAO.prototype.delete = function(snid) {
  SNlogs.destroy({snid : snid}).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};
 
 module.exports = new SNlogsDAO();