/**
 * @fileoverview Data model for MongoDB Collection csg.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-28)
 */
 
var db = require('../../utils/mongoconn.js');
var Schema = db.mongoose.Schema;

// update the schema according to the real need.
var CsgSchema = new Schema({
	pubdate: String,
	content: [String],
	adddate: Date
});

var Csg = db.mongoose.model('Csg', CsgSchema);
var CsgDAO = function() {};

/**
 * 
 * implement the methods in CsgDAO.prototype.
 * 
 */

module.exports = new CsgDAO();