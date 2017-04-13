/**
 * @fileoverview Business logical handler for /rest/nslogs.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-28)
 */
 
var express = require('express');
var router = express.Router();
var SNlogs = require('../../models/mysql/SNlogs.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    SNlogs = new SNlogs();
});

module.exports = router;
 