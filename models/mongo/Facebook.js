/**
 * @fileoverview Data model for MongoDB Collection facebook.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-24)
 */
 
var db = require('../../utils/mongoconn.js');
var Schema = db.mongoose.Schema;

// update the schema according to the real need.
var FacebookSchema = new Schema({
	pubdate: String,
	content: [String],
	adddate: Date
});

var Facebook = db.mongoose.model('Facebook', FacebookSchema);
var FacebookDAO = function() {};

/**
 * 
 * implement the methods in FacebookDAO.prototype.
 * 
 */

module.exports = new FacebookDAO();