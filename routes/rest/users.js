/**
 * @fileoverview Business logical handler for /rest/users.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-03-28)
 */
 
var express = require('express');
var router = express.Router();
var Users = require('../../models/mysql/Users.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    Users = new Users();
});

module.exports = router;