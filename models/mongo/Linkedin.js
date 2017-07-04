/**
 * @fileoverview Data model for MongoDB Collection linkedin.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-24)
 */
 
var db = require('../../utils/mongoconn.js');
var Schema = db.mongoose.Schema;
var logger = require('../../utils/utils.js').logger('model-Linkedin');

var LinkedinSchema = new Schema({
	pubdate: String,
	content: [String],
	adddate: Date
});

// update the schema according to the real need.
var Linkedin = db.mongoose.model('Linkedin', LinkedinSchema);
var LinkedinDAO = function() {};

/**
 * 
 * implement the methods in LinkedinDAO.prototype.
 * 
 */
LinkedinDAO.prototype.save = function(obj) {
	var instance = new Linkedin(obj);
	instance.save(function(err) {
 	if(err) {
		logger.error(err);
 	} else {
  	logger.info('Save a Linkedin ok!');
    }
 });
};

/**
 * oid: string format of ObjectID, must be converted to ObjectID first.
 */ 
LinkedinDAO.prototype.update = function(oid, content) {
	var id = db.mongoose.Types.ObjectId(oid);
	var conditions = { _id : id };
	var update = {$set : {content : content}};
	var options = {upsert : true};
	Linkedin.update(conditions, update, options, function(err){
    if(err) {
    	logger.error(err);
    } else {
      logger.info('Update a Linkedin ok!');
    }
	});
};

module.exports = new LinkedinDAO();