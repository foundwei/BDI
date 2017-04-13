/**
 * @fileoverview Data model for MongoDB Collection linkedin.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-24)
 */
 
var db = require('../../utils/mongoconn.js');
var Schema = db.mongoose.Schema;

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

module.exports = new LinkedinDAO();