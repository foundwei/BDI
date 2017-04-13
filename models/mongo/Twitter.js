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

module.exports = new TwitterDAO();