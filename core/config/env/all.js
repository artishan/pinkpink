'use strict';

var path = require('path');

var rootPath = path.normalize(__dirname + '/../..');

module.exports = {
  rootDir: rootPath,
  port: process.env.PORT || 3000,
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  }
};
