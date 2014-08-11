module.exports = {
  "maxSockets": null,
  "router": {
    "isCaseSensitive": true,
    "stripTrailingSlash": false
  },
  "state": {
    "cookies": {
      "parse": true,
      "failAction": "error",
      "clearInvalid": false,
      "strictHeader": true
    }
  },
  "location": "",
  "payload": {
    "maxBytes": 1048576,
    "uploads": "/var/folders/r8/dfw3s7px68q1xm2429whqnyh0000gn/T/"
  },
  "validation": null,
  "json": {
    "replacer": null,
    "space": null,
    "suffix": null
  },
  "files": {
    "relativeTo": ".",
    "etagsCacheMaxSize": 10000
  },
  "timeout": {
    "client": 10000,
    "server": false
  },
  "load": {
    "maxHeapUsedBytes": 0,
    "maxRssBytes": 0,
    "maxEventLoopDelay": 0,
    "sampleInterval": 0
  },
  "debug": {
    "request": [
      "implementation"
    ]
  },
  "labels": [],
  "cors": true,
  "security": false
  // "monitor": false
}
