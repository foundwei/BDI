/**
 * @fileoverview Data model for Mysql table Sites.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-29)
 */
 
var Sequelize = require('sequelize');
var orm = require("../../utils/mysqlconn.js");
var logger = require('../../utils/utils.js').logger('model-Sites');
 
// OR mapping
var Sites = orm.define('Sites', {
  // auto increment, primaryKey, unique
  sid: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true, allowNull: false},
  name: {type: Sequelize.STRING, allowNull: false, unique: true},
  lat: {type: Sequelize.DOUBLE, allowNull: true},
  lng: {type: Sequelize.DOUBLE, allowNull: true},
  shortname: {type: Sequelize.STRING, allowNull: true},
  longname: {type: Sequelize.STRING, allowNull: true},
  formattedaddress: {type: Sequelize.STRING, allowNull: true}
}, {
  timestamps: false,   // don't add the timestamp attributes (updatedAt, createdAt)
  charset: 'utf8',
  collate: 'utf8_general_ci'
});

Sites.sync();

var SitesDAO = function() {};

/**
 * 
 * implement the methods in SitesDAO.prototype.
 * 
 */
SitesDAO.prototype.save = function(obj) {
  Sites.create(obj).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

SitesDAO.prototype.update = function(sid, obj) {
  Sites.update(obj, {sid : sid}).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

SitesDAO.prototype.delete = function(sid) {
  Sites.destroy({sid : sid}).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

/**
 * pn : page number, start from 1 not 0
 * ps : page size
 */
SitesDAO.prototype.findAllByPage = function(pn, ps, callback) {
  Sites.findAll({limit: ps, offset: (pn - 1) * ps}, {raw : true, logging : true, plain : false}).on('success', function(res) {
    callback(res);
  }).on('failure', function(err){
    logger.error(err);
  })
};
 
module.exports = new SitesDAO();