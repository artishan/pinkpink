var path = require('path'),
rootPath = path.normalize(__dirname + '/..');

module.exports = {
  root: rootPath,
  port: parseInt(process.env.PORT, 10) || 3000,
  host: '127.0.0.1'
}
