'use strict';
var path = require('path');

console.log(path.normalize(__dirname + '/../../../' + 'api/server'));

var should = require('should'),
        app = require(path.normalize(__dirname + '/../../../' + 'api/server')),
        request = require('supertest');

describe('GET /api/vote/view', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/vote/view')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        done();
      });
  });
});
