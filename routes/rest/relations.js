/**
 * @fileoverview Business logical handler for /rest/relations.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-28)
 */
 
var express = require('express');
var router = express.Router();
var Relations = require('../../models/mysql/Relations.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    Relations = new Relations();
});

module.exports = router;