'use strict';

// Require the nedb module
var Datastore = require('nedb'),
    path = require("path"),
    fs = require('fs');

var rootPath = path.normalize(__dirname + '/../../../..');

// Initialize two nedb databases. Notice the autoload parameter.
var slide = new Datastore({ filename: rootPath + '/data/reveal/slide', autoload: true });
var slideTag = new Datastore({ filename: rootPath + '/data/reveal/slide_tag', autoload: true });
var slidePage = new Datastore({ filename: rootPath + '/data/reveal/slide_page', autoload: true });

// Create a "unique" index for the photo name and user ip
slide.ensureIndex({fieldName: 'name', unique: true});
slideTag.ensureIndex({fieldName: 'name', unique: true});

module.exports = {
  slide: slide,
  slideTag: slideTag,
  slidePage : slidePage
};
