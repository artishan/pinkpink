var manager = require("./");
var Joi = require('joi');

module.exports = [
  { method: 'GET',
    path: '/manager/server/info',
    config: {
      handler: manager.getServerInfo
    }
  },
  { method: 'GET',
    path: '/manager/server/routes',
    config: {
      handler: manager.getServerRoutes
    }
  },
  { method: 'GET',
    path: '/manager/server/route',
    config: {
      handler: manager.getServerRoute
    }
  },
  { method: 'GET',
    path: '/manager/settings',
    config: {
      handler: manager.getSettings
    }
  }
];
