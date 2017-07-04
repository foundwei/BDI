/**
 * @fileoverview Data model for MongoDB Collection officailinfo.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-24)
 */
 
var db = require('../../utils/mongoconn.js');
var Schema = db.mongoose.Schema;
var logger = require('../../utils/utils.js').logger('model-Officialinfo');

// update the schema according to the real need.
var OfficialinfoSchema = new Schema({
	pubdate: String,
	content: [String],
	adddate: Date
});

var Officialinfo = db.mongoose.model('Officialinfo', OfficialinfoSchema);
var OfficialinfoDAO = function() {};

/**
 * 
 * implement the methods in OfficialinfoDAO.prototype.
 * 
 */
OfficialinfoDAO.prototype.save = function(obj) {
 var instance = new Officialinfo(obj);
  instance.save(function(err) {
   	if(err) {
  		logger.error(err);
   	} else {
  	logger.info('Save a Officalinfo ok!');
    }
  });
};

module.exports = new OfficialinfoDAO();