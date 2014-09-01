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
    path: '/reveal/deck/{deckId}',
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
    path: '/reveal/deck/{deckId}',
    config: {
      handler: reveal.putDeck
    }
  },
  { method: 'DELETE',
    path: '/reveal/deck/{deckId}',
    config: {
      handler: reveal.deleteDeck
    }
  },
  { method: 'GET',
    path: '/reveal/slides/{deckId}',
    config: {
      handler: reveal.getSlides
    }
  },
  { method: 'GET',
    path: '/reveal/slide/{slideId}',
    config: {
      handler: reveal.getSlide
    }
  },
  { method: 'PUT',
    path: '/reveal/slide/{slideId}',
    config: {
      handler: reveal.putSlide
    }
  },
  { method: 'PUT',
    path: '/reveal/slide',
    config: {
      handler: reveal.putSlide
    }
  },
  { method: 'DELETE',
    path: '/reveal/slide',
    config: {
      handler: reveal.deleteSlide
    }
  }
];
