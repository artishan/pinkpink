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
            return;
          }
          for (var i = 0; i < data.length; i++) {
            var section;
            var slide = scope.slides[i];
            var prevSlide;
            var nextSlide;
            var subSection = angular.element("<section>");
            slide = scope.slides[i];
            nextSlide = scope.slides[i+1];
            while(data.length-1 > i){
              console.log(i+1);
              if(prevSlide === undefined){
                console.log('step1');
                if(slide.x === nextSlide.x){
                  console.log('step1-1 섹션 만들고 서브섹션 추가');
                  subSection = null;
                  subSection = angular.element("<section>");
                  subSection.append(slide.content);
                }else{
                  console.log('step1-2 단일 섹션 추가');
                  section = null;
                  section = angular.element("<section>");
                  section.append(slide.content);
                  elem.append(section);
                }
              }else if(prevSlide.x === slide.x){
                console.log('step2 - 만들어진 섹션에 서브섹션 추가');
                subSection = null;
                subSection = angular.element("<section>");
                subSection.append(slide.content);
                section.append(subSection);
              }else if(slide.x === nextSlide.x){
                elem.append(section);
                console.log('step3 - 만들어진 섹션 닫고, 섹션 만들고 서브섹션 추가');
                section = null;
                section = angular.element("<section>");
                subSection = null;
                subSection = angular.element("<section>");
                subSection.append(slide.content);
                section.append(subSection);
              }else if(prevSlide.x !== slide.x){
                console.log('step4 - 만들어진 섹션 닫고, 다시 체크');
                elem.append(section);
                if(slide.x === nextSlide.x){
                  console.log('step4-1 - 섹션 만들고 서브섹션 추가');
                  section = null;
                  section = angular.element("<section>");
                  subSection = null;
                  subSection = angular.element("<section>");
                  subSection.append(slide.content);
                  section.append(subSection);
                }else{
                  console.log('step4-2 - 단일 섹션');
                  section = null;
                  section = angular.element("<section>");
                  section.append(slide.content);
                  elem.append(section);
                }
              }else {
                console.log('step5');
                section = null;
                section = angular.element("<section>");
                section.append(slide.content);
                elem.append(section);
              }
              i++;
              if( data.length-1 > i ){
                prevSlide = scope.slides[i-1];
                slide = scope.slides[i];
                nextSlide = scope.slides[i+1];
              }else{
                break;
              }
            }
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
