/**
 * @fileoverview Business logic of facebook.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-05-27)
 */
 
var conf = require('../utils/conf.js');
var FB = require('fb');
var SNLog = require('../models/mysql/SNLogs.js');
var Ships = require('../models/mysql/Ships.js');
var Persons = require('../models/mysql/Persons.js');
var Facebook = require('../models/mongo/Facebook.js');
var logger = require('../../utils/utils.js').logger('business-facebook');

FB.options({version: conf.facebook_api_version});
FB.setAccessToken(conf.facebook_access_token);
 
/**
* Get the latest entry of a specific account from table SNLogs
* 
* sn : screen name
*/
function getLastId(sn, callback) {
  // get the last id of sn from table SNLogs and if ok, execute the callback function
  // please use the reserved field to store 'fb' in order to indicate the facebook account
  // I am afraid that there are the same sn name between twitter and facebook.
  SNLog.findOneByFBAccount(sn, function(snlog) {
    var lasttime = snlog.lasttime;
    callback(sn, lasttime);
  });
}

function savePageResult(d) {
  
}

/**
 * Get facebook posts of some organization(page) by screen name
 * 
 * sn : screen name
 */
function getFacebookOfPage(sn) {
  getLastId(sn, function(sn, lasttime) {
    FB.api('', {fields: ['id', 'created_time', 'message', 'story', 'full_picture', 'source']}, function(res) {
      if(!res || res.error) {
        logger.info(!res ? 'error occurred' : res.error);
        return;
      }
      
      savePageResult(res, lasttime);
    });
  });
}

/**
 * Get facebook posts of some users by screen name
 * 
 * sn : screen name
 */
function getFacebookOfUser(sn) {
  
}

/**
 * Query page account in Facebook account from ships table
 */ 
function queryFBofPage() {
  Ships.queryFB(function(accounts) {
    for(var account in accounts) {
      getFacebookOfPage(account);
    }
  });
}

/**
 * Query user account in Facebook from ships table
 */ 
function queryFBofUser() {
  Persons.queryFB(function(accounts) {
    for(var account in accounts) {
      getFacebookOfUser(account);
    }
  });
}

function queryFB() {
  queryFBofPage();
  queryFBofUser();
}

module.exports.queryFB = queryFB;
