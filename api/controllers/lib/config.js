'use strict';

/**
 * Create user
 */
exports.index = function (req, res, next) {
  var config = {
    'title': 'App Name',
    'value1': 'value1'
  }
  return res.json(req.user.userInfo);
};
