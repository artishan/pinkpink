'use strict';

// Require the nedb module
var Datastore = require('nedb'),
    path = require("path"),
    fs = require('fs');

var rootPath = path.normalize(__dirname + '/../../../..');

// Initialize two nedb databases. Notice the autoload parameter.
var setting = new Datastore({ filename: rootPath + '/data/manager/setting', autoload: true });

// Create a "unique" index for the photo name and user ip
setting.ensureIndex({fieldName: 'name', unique: true});

module.exports = {
  setting: setting
};
