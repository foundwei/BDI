/**
 * @fileoverview Business logical handler for /rest/sites.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-28)
 */
 
var express = require('express');
var router = express.Router();
var Sites = require('../../models/mysql/Sites.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    Sites = new Sites();
});

module.exports = router;