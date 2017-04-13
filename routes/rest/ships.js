/**
 * @fileoverview Business logical handler for /rest/ships.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-28)
 */
 
var express = require('express');
var router = express.Router();
var Ships = require('../../models/mysql/Ships.js');
var MongoShips = require('../../models/mongo/Ships.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    Ships = new Ships();
    MongoShips = new MongoShips();
});

module.exports = router;