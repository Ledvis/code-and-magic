'use strict';

(function () {
  window.colorizeElement = function (event, array) {
    var target = event.target;

    var fillElement = function (element) {
      element.style.backgroundColor = array[window.util.getRandomNumber(array)];
    };

    var changeElementBackground = function (element) {
      element.style.fill = array[window.util.getRandomNumber(array)];
    };

    if (target.tagName.toLowerCase() === 'div') {
      fillElement(target);
    } else if (target.tagName.toLowerCase() === 'use') {
      changeElementBackground(target);
    }
  };
})();
