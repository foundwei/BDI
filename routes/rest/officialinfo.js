/**
 * @fileoverview Business logical handler for /rest/officialinfo.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-28)
 */
 
var express = require('express');
var router = express.Router();
var Officialinfo = require('../../models/mongo/Officialinfo.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    Officialinfo = new Officialinfo();
});

module.exports = router;