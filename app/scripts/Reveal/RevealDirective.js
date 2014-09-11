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
        console.log(scope.slides);
        elem.append("<section><div class='loading-container'><div class='loading'></div><div id='loading-text'>loading</div></div></div></section>");
        scope.$watch('slides', function (data) {
          if(data === undefined){
            console.log('hi');
            return;
          }
          console.log(scope.slides);
          console.log(data.length);
          for (var i = 0; i < data.length; i++) {
            var section = angular.element("<section>");
            var slide = scope.slides[i];
            var nextSlide;
            if( data.length-1 > i ){
              console.log(i);
              nextSlide = scope.slides[i+1];
              if(slide.x === nextSlide.x){
                var subSection = angular.element("<section>");
                subSection.append(slide.content);
                section.append(subSection);
                var subSection2 = angular.element("<section>");
                subSection2.append(nextSlide.content);
                section.append(subSection2);
                i++;
              }else{
                section.append(slide.content);
              }
            }
            elem.append(section);
          }
          Reveal.initialize({
            width: 1300,
            margin: 0.1,
            loop: false,
            transition: Reveal.getQueryHash().transition || 'default'
          });
        });
      }
    }
  });

}).call(this);
