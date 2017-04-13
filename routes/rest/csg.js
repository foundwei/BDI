/**
 * @fileoverview Business logical handler for /rest/csg.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-28)
 */
 
var express = require('express');
var router = express.Router();
var Csg = require('../../models/mongo/Csg.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    Csg = new Csg();
});

module.exports = router;