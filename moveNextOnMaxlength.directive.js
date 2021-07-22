'use strict';

angular.module('todoApp', [])
  .directive('moveNextOnMaxlength', function() {
    return {
      restrict: 'A',
      link: function(scope, element) {
        console.log('1');
        element.on("input", function(e) {
          console.log('2');
          if(element.val().length >= element.attr("maxlength")) {
              var $nextElement = element.next();
              if($nextElement.length) {
                  $nextElement[0].focus();
              }
          }
        });
      }
    };
  });
