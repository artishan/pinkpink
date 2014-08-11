'use strict';

var db = require('./lib/nedb'),
  photos = db.photos,
  users = db.users;

exports.getPhotos = function(request, reply) {

  // Find all photos
  photos.find({}, function(err, all_photos) {

    if (all_photos.length > 0) {
      reply.reply('No photos found.').code(204);
    }
    return reply(image_to_show);

  });
};

exports.getPhotoVotes = function(request, reply) {
  photos.find({}, function(err, all_photos) {

    // Sort the photos
    all_photos.sort(function(p1, p2) {
      return (p2.likes - p2.dislikes) - (p1.likes - p1.dislikes);
    });

    // Render the standings template and pass the photos
    reply(all_photos);

  });

};

exports.getPhotoVote = function(request, reply) {

  var remoteIp = request.info.remoteAddress;
  // Find all photos
  photos.find({}, function(err, all_photos) {

    // Find the current user
    users.find({
      ip: remoteIp
    }, function(err, u) {
      if(all_photos.length == 0){
        reply('No photos found.').code(204);
      }

      var voted_on = [];

      if (u.length === 1) {
        voted_on = u[0].votes;
      }

      // Find which photos the user hasn't still voted on
      var not_voted_on = all_photos.filter(function(photo) {
        return voted_on.indexOf(photo._id) === -1;
      });

      var image_to_show = null;
      if (not_voted_on.length > 0) {
        // Choose a random image from the array
        image_to_show = not_voted_on[Math.floor(Math.random() * not_voted_on.length)];
      }
      return reply(image_to_show);
    });
  });

};

// This is executed before the next two post requests
exports.postPhotoVote = function(request, reply) {

  var remoteIp = request.info.remoteAddress;
  var payload = request.payload;
  var params = request.params;
  // Register the user in the database by ip address
  users.insert({
    ip: remoteIp,
    votes: []
  }, function() {
    var what = {
      'notcute': {
        dislikes: 1
      },
      'cute': {
        likes: 1
      }
    };
    // Find the photo, increment the vote counter and mark that the user has voted on it.
    photos.find({
      name: payload.name
    }, function(err, found) {
      if (found.length === 1) {
        photos.update(found[0], {
          $inc: what[params.score]
        });
        users.update({
          ip: remoteIp
        }, {
          $addToSet: {
            votes: found[0]._id
          }
        }, function() {
          reply("sucess");
        });
      } else {
        reply("end");
      }
    });
  });

};
