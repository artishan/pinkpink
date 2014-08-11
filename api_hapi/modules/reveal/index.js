var db = require("./lib/nedb");

exports.getSlides = function(request, reply) {
  db.slide.find({}, function(err, slides){
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
  var data = {
    name: request.payload.name,
    content: request.payload.content
  }
  db.slide.insert(data, function(err, data){
    if(err){
      console.log(err);
      reply(data);
    }
    reply(data);
  });
}
