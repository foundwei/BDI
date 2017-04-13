/**
 * @fileoverview Business logical handler for /rest/psrelations.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-28)
 */
 
var express = require('express');
var router = express.Router();
var PSrelations = require('../../models/mysql/PSrelations.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    PSrelations = new PSrelations();
});

module.exports = router;