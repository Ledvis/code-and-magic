'use strict';

(function () {
  window.colorizeElement = function (event, colors) {
    var element = event.target;
    var color = colors[window.util.getRandomNumber(colors)];

    if (element.tagName.toLowerCase() === 'div') {
      element.style.backgroundColor = color;
    } else if (element.tagName.toLowerCase() === 'use') {
      element.style.fill = color;
    }
  };
})();
