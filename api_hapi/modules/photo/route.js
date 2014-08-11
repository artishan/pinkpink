var photo = require("./");
var Joi = require('joi');

module.exports = [
  { method: 'GET',
    path: '/photo',
    config: {
      handler: photo.getPhotos
    }
  },
  { method: 'GET',
    path: '/photo/vote',
    config: {
      handler: photo.getPhotoVote
    }
  },
  { method: 'GET',
    path: '/photo/votes',
    config: {
      handler: photo.getPhotoVotes
    }
  },
  { method: 'POST',
    path: '/photo/vote/{score}',
    config: {
      handler: photo.postPhotoVote
    }
  }
];
