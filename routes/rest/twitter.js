/**
 * @fileoverview Business logical handler for /rest/twitter.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-28)
 */
 
var express = require('express');
var router = express.Router();
var Twitter = require('../../models/mongo/Twitter.js');
var conf = require('../../utils/conf.js');

/* Get everyone's tweets. */
router.get('/', function(req, res, next) {
  //Twitter = new Twitter(); don't need to new Twitter object again
  var ps = req.params.ps | conf.pagesize;
  var pn = req.params.pn;
  Twitter.findAllByPage(pn, ps, function(err, docs) {
      if(err) {
          res.send('Failed to fetch tweets!');
      } else {
          res.send(docs.content);
      }
  });
});

/* Get someone's tweets. */
router.get('/:screenname', function(req, res, next) {
  var ps = req.params.ps | conf.pagesize;
  var pn = req.params.pn;
  var sn = req.params.screenname;
  Twitter.findNameByPage(pn, ps, sn, function(err, docs) {
    if(err) {
        res.send('Failed to fetch tweets of ' + sn + '!');
    } else {
        res.send(docs.content);
    }
  });
});

/* Get the questionable tweets. */
router.get('/flag', function(req, res, next) {
  var ps = req.params.ps | conf.pagesize;
  var pn = req.params.pn;
  Twitter.findFlagByPage(pn, ps, function(err, docs) {
    if(err) {
        res.send('Failed to fetch tweets of ' + sn + '!');
    } else {
        res.send(docs.content);
    }
  });
});


module.exports = router;