/**
 * @fileoverview Data model for Mysql table PSrelaitons.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-29)
 */
 
var Sequelize = require('sequelize');
var orm = require("../../utils/mysqlconn.js");
var logger = require('../../utils/utils.js').logger('model-PSrelations');
 
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
PSrelaitonsDAO.prototype.save = function(obj) {
  PSrelaitons.create(obj).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

PSrelaitonsDAO.prototype.update = function(psid, obj) {
  PSrelaitons.update(obj, {psid : psid}).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

PSrelaitonsDAO.prototype.delete = function(psid) {
  PSrelaitons.destroy({psid : psid}).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

/**
 * pn : page number, start from 1 not 0
 * ps : page size
 */
PSrelaitonsDAO.prototype.findAllByPage = function(pn, ps, callback) {
  PSrelaitons.findAll({limit: ps, offset: (pn - 1) * ps}, {raw : true, logging : true, plain : false}).on('success', function(res) {
    callback(res);
  }).on('failure', function(err){
    logger.error(err);
  })
};
 
module.exports = new PSrelaitonsDAO();