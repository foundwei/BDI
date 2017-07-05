/**
 * @fileoverview Data model for Mysql table Relations.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-29)
 */
 
var Sequelize = require('sequelize');
var orm = require("../../utils/mysqlconn.js");
var logger = require('../../utils/utils.js').logger('model-Relations');
 
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
RelaitonsDAO.prototype.save = function(obj) {
  Relaitons.create(obj).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

RelaitonsDAO.prototype.update = function(rid, obj) {
  Relaitons.update(obj, {rid : rid}).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

RelaitonsDAO.prototype.delete = function(rid) {
  Relaitons.destroy({rid : rid}).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

/**
 * pn : page number, start from 1 not 0
 * ps : page size
 */
RelaitonsDAO.prototype.findAllByPage = function(pn, ps, callback) {
  Relaitons.findAll({limit: ps, offset: (pn - 1) * ps}, {raw : true, logging : true, plain : false}).on('success', function(res) {
    callback(res);
  }).on('failure', function(err){
    logger.error(err);
  })
};
 
module.exports = new RelaitonsDAO();