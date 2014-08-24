var db = require("./lib/nedb");

exports.getDecks = function(request, reply) {
  db.deck.find({}, function(err, decks){
    return reply(decks);
  });
};

exports.getDeck = function(request, reply) {
  console.log(request.params);
  db.slide.find({_id: request.params.id}, function(err, slide){
    console.log(slide);
    return reply(slide);
  });
}

exports.putDeck = function(request, reply) {
  var data = request.payload;
  db.deck.insert(data, function(err, data){
    if(err){
      reply(err);
    }
    reply(data);
  });
}

exports.getSlides = function(request, reply) {
  console.log(request.params);
  db.slide.find({deck_id: request.params.deckId}, function(err, slides){
    console.log(slides);
    return reply(slides);
  });
};

exports.getSlide = function(request, reply) {
  console.log(request.params);
  db.slide.find({_id: request.params.id}, function(err, slide){
    console.log(slide);
    return reply(slide);
  });
}

exports.putSlide = function(request, reply) {
  // var data = {
  //   name: request.payload.name,
  //   content: request.payload.content
  // }
  var data = request.payload;
  db.slide.insert(data, function(err, data){
    if(err){
      reply(err);
    }
    reply(data);
  });
}
