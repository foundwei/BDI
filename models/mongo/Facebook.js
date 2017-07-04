/**
 * @fileoverview Data model for MongoDB Collection facebook.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-24)
 */
 
var db = require('../../utils/mongoconn.js');
var Schema = db.mongoose.Schema;
var logger = require('../../utils/utils.js').logger('model-Facebook');

// update the schema according to the real need.
var FacebookSchema = new Schema({
	pubdate: String,
	screenname: String,
	flag: Boolean,	// mark the valuable fb
	content: [String],
	localmediaurl: String,	// downlaod the media resource to local
	adddate: Date
});

var Facebook = db.mongoose.model('Facebook', FacebookSchema);
var FacebookDAO = function() {};

/**
 * 
 * implement the methods in FacebookDAO.prototype.
 * 
 */
FacebookDAO.prototype.save = function(obj) {
	var instance = new Facebook(obj);
	instance.save(function(err) {
 	if(err) {
		logger.error(err);
 	} else {
  	logger.info('Save a Facebook ok!');
    }
 });
}

/**
 * sn : screen name
 */ 
FacebookDAO.prototype.findLatestOne = function(sn, callback) {
	Facebook.findOne({screenname: sn}, null, {sort: {adddate: -1}}, function(err, doc) {
		callback(err, doc);
	});
};

/**
 * pn : page number, start from 1 not 0
 * ps : page size
 */
FacebookDAO.prototype.findAllByPage = function(pn, ps, callback) {
	var query = Facebook.find({}, null, {sort: {adddate: -1}});
	query.skip((pn - 1) * ps);
	query.limit(ps);
	
	query.exec(function(err, docs) {
		callback(err, docs);
	});
};

/**
 * retrieve the facebook of a specific screen name by page 
 * pn : page number, start from 1 not 0
 * ps : page size
 * sn : screen name
 */
FacebookDAO.prototype.findNameByPage = function(pn, ps, sn, callback) {
	var query = Facebook.find({sreenname: sn}, null, {sort: {adddate: -1}});
	query.skip((pn - 1) * ps);
	query.limit(ps);
	
	query.exec(function(err, docs) {
		callback(err, docs);
	});
};

/**
 * retrieve the flagged facebook by page
 * pn  : page number, start from 1 not 0
 * ps  : page size
 * flag: true(always)
 */
FacebookDAO.prototype.findFlagByPage = function(pn, ps, callback) {
	var query = Facebook.find({flag: true}, null, {sort: {adddate: -1}});
	query.skip((pn - 1) * ps);
	query.limit(ps);
	
	query.exec(function(err, docs) {
		callback(err, docs);
	});
};

module.exports = new FacebookDAO();