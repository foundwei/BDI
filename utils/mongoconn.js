/**
 * @fileoverview MongoDB Connection.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-24)
 */
 
var mongoose = require('mongoose');

var mongo = {
	'hostname': '123.57.85.30',
	'port': 27017,
	'username': '',
	'password': '',
	'name': '',
	'db': 'bdi'
}

var generate_mongo_url = function(obj) {
	obj.hostname = (obj.hostname || 'localhost');
	obj.port = (obj.port || 27017);
	obj.db = (obj.db || 'bdi');

	if(obj.username && obj.password) {
		return 'mongodb://' + obj.username + ':' + obj.password + '@' + obj.hostname + ':' + obj.port + '/' + obj.db;
	} else {
		return 'mongodb://' + obj.hostname + ':' + obj.port + '/' + obj.db;
	}
}

var mongourl = generate_mongo_url(mongo);
mongoose.connect(mongourl);

module.exports.mongoose = mongoose;