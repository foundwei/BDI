/**
 * @fileoverview Data model for MongoDB Collection ships.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-24)
 */
 
var db = require('../../utils/mongoconn.js');
var Schema = db.mongoose.Schema;
var logger = require('../../utils/utils.js').logger('model-Ship');

// update the schema according to the real need.
var ShipsSchema = new Schema({
	pubdate: String,
	content: [String],
	adddate: Date
});

var Ships = db.mongoose.model('Ships', ShipsSchema);
var ShipsDAO = function() {};

/**
 * 
 * implement the methods in ShipsDAO.prototype.
 * 
 */
ShipsDAO.prototype.save = function(obj) {
	var instance = new Ships(obj);
	instance.save(function(err) {
	 	if(err) {
			logger.error(err);
	 	} else {
	  	logger.info('Save a Ship ok!');
	  }
	});
};

module.exports = new ShipsDAO();