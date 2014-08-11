//TODO: 로그폴더 생
var path = require('path'),
rootPath = path.normalize(__dirname + '/../../..');

module.exports = function(server) {

    // Options to pass into the 'Good' plugin
    var goodOptions = {
        subscribers: {
            console: ['request', 'log', 'error']
        }
    };
    // The Assets Configuaration Options
    // var assetOptions = require('../../assets');

    server.pack.register([
        {
            plugin: require("good"),
            options: goodOptions
        },
        {
            plugin: require("hapi-cache-buster")
        }
    ], function(err) {
        if (err) throw err;
    });
};
