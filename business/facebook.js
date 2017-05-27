/**
 * @fileoverview Business logic of facebook.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-05-27)
 */
 
 var conf = require('../utils/conf.js');
 var FB = require('fb');
 var SNLog = require('../models/mysql/SNLogs.js');
 
 var last_time;
 
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
    last_time = snlog.lasttime;
    callback(sn);
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
  getLastId(sn, function(res) {
    FB.api('', {fields: ['id', 'created_time', 'message', 'story', 'full_picture', 'source']}, function(res) {
      if(!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
      }
      
      savePageResult(res)
    });
  });
  
}
