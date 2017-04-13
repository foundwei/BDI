/**
 * @fileoverview Business logical handler for /rest/categories.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-28)
 */
 
var express = require('express');
var router = express.Router();
var Categories = require('../../models/mysql/Categories.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    Categories = new Categories();
});

module.exports = router;