/**
 * @fileoverview The utilities functions/methods go into this file.
 *
 * @author Wei Chengli (foundwei@qq.com)
 * @version 1.0 (2017-07-03)
 */

var log4js = require('log4js');
log4js.configure({
  appenders: [
    { type: 'console' },
    {
      type: 'file', 
      filename: 'logs/access.log', 
      maxLogSize: 1024,
      backups:4,
      category: 'normal' 
    }
  ],
  replaceConsole: true
});

module.exports.log4js = log4js;
module.exports.logger = function(name) {
  var logger = log4js.getLogger(name);
  logger.setLevel('INFO');
  return logger;
};