/**
 * @fileoverview Business logical handler for /rest/facebook.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-28)
 */
 
var express = require('express');
var router = express.Router();
var Facebook = require('../../models/mongo/Facebook.js');
var conf = require('../../utils/conf.js');

/* Get everyone's facebooks. */
router.get('/', function(req, res, next) {
  // Facebook = new Facebook();
  var ps = req.params.ps | conf.pagesize;
  var pn = req.params.pn;
  Facebook.findAllByPage(pn, ps, function(err, docs) {
      if(err) {
          res.send('Failed to fetch facebook!');
      } else {
          res.send(docs.content);
      }
  });
});

/* Get someone's facebook. */
router.get('/:screenname', function(req, res, next) {
  var ps = req.params.ps | conf.pagesize;
  var pn = req.params.pn;
  var sn = req.params.screenname;
  Facebook.findNameByPage(pn, ps, sn, function(err, docs) {
    if(err) {
        res.send('Failed to fetch facebook of ' + sn + '!');
    } else {
        res.send(docs.content);
    }
  });
});

/* Get the valuable facebook. */
router.get('/flag', function(req, res, next) {
  var ps = req.params.ps | conf.pagesize;
  var pn = req.params.pn;
  Facebook.findFlagByPage(pn, ps, function(err, docs) {
    if(err) {
        res.send('Failed to fetch the flagged Facebook!');
    } else {
        res.send(docs.content);
    }
  });
});

module.exports = router;