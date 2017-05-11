/**
 * @fileoverview Business logic of twitter.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-05-03)
 */
 
var conf = require('../utils/conf.js');
var Tweet = require('../models/mongo/Twitter.js');
var SNLog = require('../models/mysql/SNLogs.js');
var twitter = require('ntwitter');

var last_id;
var trytimes = 5;

var twit = new twitter({
  consumer_key: conf.consumer_key,
  consumer_secret: conf.consumer_secret,
  access_token_key: conf.access_token_key,
  access_token_secret: conf.access_token_secret
});

/**
 * Get the latest entry of a specific account from table SNLogs
 * 
 * sn : screen name
 */
function getLastId(sn, callback) {
  // get the last id of sn from table SNLogs and if ok, execute the callback function
  // please use the reserved field to store the last id of twitter account
  SNLog.findOneByAccount(sn, function(snlog) {
    last_id = snlog.reserved;
    callback(sn);
  });
}

function saveResult(d) {
  if(d && d.length > 0) {
    for(var i = 0; i < d.length; i++) {
      Tweet.save({pubdate: d[i].create_at, screenname: d[i].user.screenname, flag: false, content: d[i].text, adddate: Date()}, function(err) {
        if(err)
          console.error('Failed to save tweet: ' + err);
      });
    }
    
    last_id = d[0].id;
    // save the last id of current account to table SNLogs
    SNLog.upsertByAccount({account: d[0].user.screenname, lasttime: null, reserved: last_id});
  }
}

/**
 * Get the tweets of somebody by screen name
 * 
 * sn : screen name
 */
function getTweetsOfSomeone(sn) {
  twit.verifyCredentials(function(err, data) {
    console.log(data);
  }).updateStatus('BDI/' + twitter.VERSION, function(err, data) {
    console.log(data);
  });
  
  getLastId(sn, function() {
    twit.getUserTimeline({screen_name: sn, since_id: last_id}, function(err, data) {
      if(err) {
        /* I found that the twitter connection is not stable, failed to retrieve data frequently,
         * so try 5 times here.
         */
        if(trytimes > 0) {
          setTimeout(function() {
            getTweetsOfSomeone(sn);
          }, 60 * 1000);
          
          trytimes--;
        } else {
          trytimes = 5;
          console.error('Have already tried 5 times for twitter of ' + sn + ', give up today!');
        }
      } else {
        saveResult(data);
      }
    });
  });
}
