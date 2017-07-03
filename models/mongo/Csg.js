/**
 * @fileoverview Data model for MongoDB Collection csg.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-28)
 */
 
var db = require('../../utils/mongoconn.js');
var Schema = db.mongoose.Schema;
var logger = require('../../utils/utils.js').logger('model-Csg');

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
CsgDAO.prototype.save = function(obj) {
 var instance = new Csg(obj);
 instance.save(function(err) {
 	if(err) {
		logger.error(err);
 	} else {
  	logger.info('Save a Csg ok!');
    }
 });
};

/**
 * oid: string format of ObjectID, must be converted to ObjectID first.
 */ 
CsgDAO.prototype.remove = function(oid) {
	var id = db.mongoose.Types.ObjectId(oid);
	var conditions = { _id: id };
	Csg.remove(conditions, function(err) {
    if(err) {
			logger.error(err);
    } else {
			logger.info('Delete a Csg ok!');
    }
	});
};

/**
 * oid: string format of ObjectID, must be converted to ObjectID first.
 */ 
CsgDAO.prototype.update = function(oid, content) {
	var id = db.mongoose.Types.ObjectId(oid);
	var conditions = { _id : id };
	var update = {$set : {content : content}};
	var options = {upsert : true};
	Csg.update(conditions, update, options, function(err){
    if(err) {
    	logger.error(err);
    } else {
      logger.info('Update a Csg ok!');
    }
	});
};

/**
 * pn : page number, start from 1 not 0
 * ps : page size
 */
CsgDAO.prototype.findAllByPage = function(pn, ps, callback) {
	var query = Csg.find({}, null, {sort: {adddate: -1}});
	query.skip((pn - 1) * ps);
	query.limit(ps);
	
	query.exec(function(err, docs) {
		callback(err, docs);
	});
};

module.exports = new CsgDAO();