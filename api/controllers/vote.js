'use strict';

var db = require('../models/database'),
      photos = db.photos,
      users = db.users;

exports.view = function(req, res) {
    // Find all photos
    photos.find({}, function(err, all_photos){

      // Find the current user
      users.find({ip: req.ip}, function(err, u){

           var voted_on = [];

           if(u.length === 1){
                voted_on = u[0].votes;
           }

           // Find which photos the user hasn't still voted on

           var not_voted_on = all_photos.filter(function(photo){
                return voted_on.indexOf(photo._id) === -1;
           });

           var image_to_show = null;

           if(not_voted_on.length > 0){
                // Choose a random image from the array
                image_to_show = not_voted_on[Math.floor(Math.random()*not_voted_on.length)];
           }

		return res.json(image_to_show);
        });

    });
};

exports.board = function(req, res){

    photos.find({}, function(err, all_photos){

        // Sort the photos
        all_photos.sort(function(p1, p2){
            return (p2.likes - p2.dislikes) - (p1.likes - p1.dislikes);
        });

        // Render the standings template and pass the photos
        res.json(all_photos);

    });

};

// This is executed before the next two post requests
exports.score =  function(req, res, next){

    // Register the user in the database by ip address
    console.log('post');
    console.log(req.params);
    console.log(req.body);

    users.insert({
        ip: req.ip,
        votes: []
    }, function(){

	    var what = {
	        'notcute': {dislikes:1},
	        'cute': {likes:1}
	    };

	    // Find the photo, increment the vote counter and mark that the user has voted on it.

	    photos.find({ name: req.body.photo }, function(err, found){

	        if(found.length === 1){

	            photos.update(found[0], {$inc : what[req.params.score]});

	            users.update({ip: req.ip}, { $addToSet: { votes: found[0]._id}}, function(){
	                res.redirect('/vote');
	            });

	        }
	        else{
	            res.redirect('/vote');
	        }

	    });

        // Continue with the other routes
        // next();
    });

};
