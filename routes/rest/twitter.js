/**
 * @fileoverview Business logical handler for /rest/twitter.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-28)
 */
 
var express = require('express');
var router = express.Router();
var Twitter = require('../../models/mongo/Twitter.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    Twitter = new Twitter();
});

module.exports = router;