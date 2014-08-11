var reveal = require("./");
var Joi = require('joi');

module.exports = [
    { method: 'GET',
      path: '/reveal/slides',
      config: {
        handler: reveal.getSlides
      }
    },
    { method: 'GET',
      path: '/reveal/slide/{id}',
      config: {
        handler: reveal.getSlide
      }
    },
    { method: 'PUT',
      path: '/reveal/slide',
      config: {
        handler: reveal.putSlide
      }
    }
];
