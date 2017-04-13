/**
 * @fileoverview Business logical handler for /rest/persons.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-28)
 */
 
var express = require('express');
var router = express.Router();
var Persons = require('../../models/mysql/Persons.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    Persons = new Persons();
});

module.exports = router;