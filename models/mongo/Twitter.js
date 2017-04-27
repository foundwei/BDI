/**
 * @fileoverview Data model for MongoDB Collection twitter.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-24)
 */
 
var db = require('../../utils/mongoconn.js');
var Schema = db.mongoose.Schema;

// update the schema according to the real need.
var TwitterSchema = new Schema({
	pubdate: String,
	screenname: String,
	flag: Boolean,	// mark the valuable tweet
	content: [String],
	adddate: Date
});

var Twitter = db.mongoose.model('Twitter', TwitterSchema);
var TwitterDAO = function() {};

/**
 * 
 * implement the methods in TwitterDAO.prototype.
 * 
 */
TwitterDAO.prototype.save = function(obj, callback) {
	var instance = new Twitter(obj);
	instance.save(function(err) {
		callback(err);
	});
}

/**
 * sn : screen name
 */ 
TwitterDAO.prototype.findLatestOne = function(sn, callback) {
	Twitter.findOne({screenname: sn}, null, {sort: {adddate: -1}}, function(err, doc) {
		callback(err, doc);
	});
};

/**
 * retrieve all tweets by page
 * pn : page number, start from 1 not 0
 * ps : page size
 */
TwitterDAO.prototype.findAllByPage = function(pn, ps, callback) {
	var query = Twitter.find({}, null, {sort: {adddate: -1}});
	query.skip((pn - 1) * ps);
	query.limit(ps);
	
	query.exec(function(err, docs) {
		callback(err, docs);
	});
};

/**
 * retrieve the tweets of a specific screen name by page
 * pn : page number, start from 1 not 0
 * ps : page size
 * sn : screen name
 */
TwitterDAO.prototype.findNameByPage = function(pn, ps, sn, callback) {
	var query = Twitter.find({sreenname: sn}, null, {sort: {adddate: -1}});
	query.skip((pn - 1) * ps);
	query.limit(ps);
	
	query.exec(function(err, docs) {
		callback(err, docs);
	});
};

/**
 * retrieve the flagged tweets by page
 * pn  : page number, start from 1 not 0
 * ps  : page size
 * flag: true(always)
 */
TwitterDAO.prototype.findFlagByPage = function(pn, ps, callback) {
	var query = Twitter.find({flag: true}, null, {sort: {adddate: -1}});
	query.skip((pn - 1) * ps);
	query.limit(ps);
	
	query.exec(function(err, docs) {
		callback(err, docs);
	});
};

module.exports = new TwitterDAO();
