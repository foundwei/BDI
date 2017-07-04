/**
 * @fileoverview Data model for Mysql table Locations.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-29)
 */
 
var Sequelize = require('sequelize');
var orm = require("../../utils/mysqlconn.js");
var logger = require('../../utils/utils.js').logger('model-Locations');

// OR mapping
var Locations = orm.define('Locations', {
  // auto increment, primaryKey, unique
  lid: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true, allowNull: false},
  shid: {
    type: Sequelize.INTEGER, 
    allowNull: false,
    field: 'shid',
    references: {
      model: 'Ships',
      key: 'shid'
    }
  },
  sid: {
    type: Sequelize.INTEGER, 
    allowNull: false,
    field: 'sid',
    references: {
      model: 'Sites',
      key: 'sid'
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

Locations.sync();

var LocationsDAO = function() {};

/**
 * 
 * implement the methods in LocationsDAO.prototype.
 * 
 */
LocationsDAO.prototype.save = function(obj) {
  Locations.create(obj).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

LocationsDAO.prototype.update = function(lid, obj) {
  Locations.update(obj, {lid : lid}).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

LocationsDAO.prototype.delete = function(lid) {
  Locations.destroy({lid : lid}).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

/**
 * pn : page number, start from 1 not 0
 * ps : page size
 */
LocationsDAO.prototype.findAllByPage = function(pn, ps, callback) {
  Locations.findAll({limit: ps, offset: (pn - 1) * ps}, {raw : true, logging : true, plain : false}).on('success', function(res) {
    callback(res);
  }).on('failure', function(err){
    logger.error(err);
  })
};
 
module.exports = new LocationsDAO();