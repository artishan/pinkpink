(function() {
  'use strict';
  angular.module('reveal.directives', [])
  .directive('slideshow', function() {
    return {
      scope: {
      slides: '=slideshow'
      },
      link: function(scope, elem, attrs) {
        elem.addClass('slides');
        for (var i = 0; i < scope.slides.length; i++) {
          var section = angular.element("<section>");
          var steps = scope.slides[i].steps;

          if (steps.length == 1) {
            var content = angular.element("<h1>").html(steps[0]);
            section.append(content);
          } else {
            for (var j = 0; j < steps.length; j++) {
              var subSection = angular.element("<section>");
              if (j < steps.length - 1)
                subSection.attr('data-autoslide', '1000');
              var content = angular.element("<h1>").html(steps[j]);
              subSection.append(content);
              section.append(subSection);
            }
          }

          elem.append(section);
        }

        Reveal.initialize({
          loop: false,
          transition: Reveal.getQueryHash().transition || 'none'
        });
      }
    }
  });

}).call(this);
