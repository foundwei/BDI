/**
 * @fileoverview Data model for Mysql table Users.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-29)
 */

var Sequelize = require('sequelize');
var orm = require("../../utils/mysqlconn.js");
var logger = require('../../utils/utils.js').logger('model-Users');
 
// OR mapping
var Users = orm.define('Users', {
  // auto increment, primaryKey, unique
  uid: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true, allowNull: false},
  username: {type: Sequelize.STRING, allowNull: false, unique: true},
  password: {type: Sequelize.STRING, allowNull: false},
  memo: {type: Sequelize.STRING, allowNull: true}
}, {
  timestamps: false,   // don't add the timestamp attributes (updatedAt, createdAt)
  charset: 'utf8',
  collate: 'utf8_general_ci'
});

Users.sync();

var UsersDAO = function() {};

/**
 * 
 * implement the methods in UsersDAO.prototype.
 * 
 */
UsersDAO.prototype.save = function(obj) {
  Users.create(obj).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

UsersDAO.prototype.update = function(uid, obj) {
  Users.update(obj, {uid : uid}).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

UsersDAO.prototype.delete = function(uid) {
  Users.destroy({uid : uid}).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

/**
 * pn : page number, start from 1 not 0
 * ps : page size
 */
UsersDAO.prototype.findAllByPage = function(pn, ps, callback) {
  Users.findAll({limit: ps, offset: (pn - 1) * ps}, {raw : true, logging : true, plain : false}).on('success', function(res) {
    callback(res);
  }).on('failure', function(err){
    logger.error(err);
  })
};
 
module.exports = new UsersDAO();