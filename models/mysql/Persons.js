/**
 * @fileoverview Data model for Mysql table Persons.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-29)
 */
 
var Sequelize = require('sequelize');
var orm = require("../../utils/mysqlconn.js");
var logger = require('../../utils/utils.js').logger('model-Persons');
 
// OR mapping
var Persons = orm.define('Persons', {
  // auto increment, primaryKey, unique
  pid: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique : true, allowNull: false},
  name: {type: Sequelize.STRING, allowNull: true},
  sex: {type: Sequelize.ENUM('0', '1'), allowNull: true},
  birthday: {type: Sequelize.DATE, allowNull: true},
  email: {type: Sequelize.STRING, allowNull: true},
  phone: {type: Sequelize.STRING, allowNull: true},
  fax: {type: Sequelize.STRING, allowNull: true},
  rank: {type: Sequelize.STRING, allowNull: true},
  division: {type: Sequelize.STRING, allowNull: true},
  flag: {type: Sequelize.INTEGER, allowNull: true},
  photo: {type: Sequelize.STRING, allowNull: true},
  street: {type: Sequelize.STRING, allowNull: true},
  city: {type: Sequelize.STRING, allowNull: true},
  state: {type: Sequelize.STRING, allowNull: true},
  zip: {type: Sequelize.STRING, allowNull: true},
  twitter: {type: Sequelize.STRING, allowNull: true},
  facebook: {type: Sequelize.STRING, allowNull: true},
  linkedin: {type: Sequelize.STRING, allowNull: true},
  remark: {type: Sequelize.TEXT, allowNull: true}
}, {
  timestamps: false,   // don't add the timestamp attributes (updatedAt, createdAt)
  charset: 'utf8',
  collate: 'utf8_general_ci'
});

Persons.sync();

var PersonsDAO = function() {};

/**
 * 
 * implement the methods in PersonsDAO.prototype.
 * 
 */
PersonsDAO.prototype.save = function(obj) {
  Persons.create(obj).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

PersonsDAO.prototype.update = function(pid, obj) {
  Persons.update(obj, {pid : pid}).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

PersonsDAO.prototype.delete = function(pid) {
  Persons.destroy({pid : pid}).on('success', function(msg) {
    logger.info(msg);
  }).on('failure', function(err){
    logger.error(err);
  });
};

/**
 * pn : page number, start from 1 not 0
 * ps : page size
 */
PersonsDAO.prototype.findAllByPage = function(pn, ps, callback) {
  Persons.findAll({limit: ps, offset: (pn - 1) * ps}, {raw : true, logging : true, plain : false}).on('success', function(res) {
    callback(res);
  }).on('failure', function(err){
    logger.error(err);
  })
};

module.exports = new PersonsDAO();