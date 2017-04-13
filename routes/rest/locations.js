/**
 * @fileoverview Business logical handler for /rest/locations.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-28)
 */
 
var express = require('express');
var router = express.Router();
var Locations = require('../../models/mysql/Locations.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    Locations = new Locations();
});

module.exports = router;