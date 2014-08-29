var db = require("./lib/nedb");

exports.getDecks = function(request, reply) {
  db.deck.find({}, function(err, decks){
    return reply(decks);
  });
};

exports.getDeck = function(request, reply) {
  console.log(request.params);
  db.slide.find({_id: request.params.deckId}, function(err, slide){
    console.log(slide);
    return reply(slide);
  });
}

exports.putDeck = function(request, reply) {
  var params = request.params;
  var data = request.payload;
  if( params.deckId ){
    db.deck.update({_id: params.deckId}, { $set: data }, {}, function(err, data){
      if(err){
        reply(err);
      }
      reply(data);
    });
  }else{
    db.deck.insert(data, function(err, data){
      if(err){
        reply(err);
      }
      reply(data);
    });
  }

}

exports.getSlides = function(request, reply) {
  db.slide.find({deck_id: request.params.deckId}, function(err, slides){
    console.log(slides);
    return reply(slides);
  });
};

exports.getSlide = function(request, reply) {
  db.slide.find({_id: request.params.slideId}, function(err, slide){
    console.log(slide);
    return reply(slide);
  });
}

exports.putSlide = function(request, reply) {
  var params = request.params;
  var data = request.payload;
  if( params.slideId ){
    db.slide.update({_id: params.slideId}, { $set: data }, {}, function(err, data){
      if(err){
        reply(err);
      }
      reply({"slideId": params.slideId});
    });
  }else{
    db.slide.insert(data, function(err, data){
      if(err){
        reply(err).code(501);
      }
      console.log(data);
      reply(data).code(201);
    });
  }

}
