var reveal = require("./");
var Joi = require('joi');

module.exports = [
  { method: 'GET',
    path: '/reveal/decks',
    config: {
      handler: reveal.getDecks
    }
  },
  { method: 'GET',
    path: '/reveal/deck/{id}',
    config: {
      handler: reveal.getDeck
    }
  },
  { method: 'PUT',
    path: '/reveal/deck',
    config: {
      handler: reveal.putDeck
    }
  },
  { method: 'PUT',
    path: '/reveal/deck/{id}',
    config: {
      handler: reveal.putDeck
    }
  },
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
