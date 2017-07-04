/**
 * @fileoverview Data model for Mysql table Categories.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-29)
 */
 
var Sequelize = require('sequelize');
var orm = require("../../utils/mysqlconn.js");
var logger = require('../../utils/utils.js').logger('model-Categories');
 
// OR mapping
var Categories = orm.define('Categories', {
  // auto increment, primaryKey, unique
  cid: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true, allowNull: false},
  name: {type: Sequelize.STRING},
  memo: {type: Sequelize.STRING, allowNull: true}
}, {
  timestamps: false,   // don't add the timestamp attributes (updatedAt, createdAt)
  charset: 'utf8',
  collate: 'utf8_general_ci'
});

Categories.sync();

var CategoriesDAO = function() {};

/**
 * 
 * implement the methods in CategoriesDAO.prototype.
 * 
 */
 
CategoriesDAO.prototype.save = function(obj) {
  Categories.create(obj).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

CategoriesDAO.prototype.update = function(id, obj) {
  Categories.update(obj, {id : id}).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

CategoriesDAO.prototype.delete = function(id) {
  Categories.destroy({id : id}).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

/**
 * pn : page number, start from 1 not 0
 * ps : page size
 */
CategoriesDAO.prototype.findAllByPage = function(pn, ps, callback) {
  Categories.findAll({limit: ps, offset: (pn - 1) * ps}, {raw : true, logging : true, plain : false}).on('success', function(res) {
    callback(res);
  }).on('failure', function(err){
    logger.error(err);
  })
};
 
module.exports = new CategoriesDAO();