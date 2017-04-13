/**
 * @fileoverview Mysql Connection..
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-24)
 */

/**
 * Changed by weicl on 2017-03-28, replace mysql module with sequelize module 
 * to connect mysql databse and do OR mapping.
 * 
var mydb = {};
var mysql = require('mysql');
var myconf = {
  connectionLimit: 10,
  host: '123.57.85.30',
  port: 3306,
  user: 'root',
  password: 'admin',
  database:'bdi'
}

var pool  = mysql.createPool(myconf);
mydb.query = function(sql, callback){  
  if (!sql) {
    callback();
    return;
  }
  
  pool.query(sql, function(err, rows, fields) {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }

    callback(null, rows, fields);
  });
}

module.exports = mydb;
*/
 
var Sequelize = require('sequelize');

var myconf = {
  host: '123.57.85.30',
  port: 3306,
  dialect : 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
};

var sequelize = new Sequelize('bdi', 'root', 'admin', myconf);
sequelize.authenticate().then(function(err) {
  console.log('Connection has been established successfully.');
}).catch(function (err) {
  console.log('Unable to connect to the database:', err);
});


module.exports = sequelize;