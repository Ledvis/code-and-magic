'use strict';

(function () {
  window.colorizeElement = function (event, color) {
    var element = event.target;

    if (element.tagName.toLowerCase() === 'div') {
      element.style.backgroundColor = color;
    } else if (element.tagName.toLowerCase() === 'use') {
      element.style.fill = color;
    }
  };
})();
