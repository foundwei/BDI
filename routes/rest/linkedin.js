/**
 * @fileoverview Business logical handler for /rest/linkedin.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-28)
 */
 
var express = require('express');
var router = express.Router();
var Linkedin = require('../../models/mongo/Linkedin.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    Linkedin = new Linkedin();
});

module.exports = router;