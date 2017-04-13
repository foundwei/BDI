/**
 * @fileoverview Business logical handler for /rest/facebook.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-28)
 */
 
var express = require('express');
var router = express.Router();
var Facebook = require('../../models/mongo/Facebook.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    Facebook = new Facebook();
});

module.exports = router;