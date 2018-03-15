'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    isEscEvent: function (event, action) {
      if (event.keyCode === ESC_KEYCODE && window.dialog.userNameInput !== document.activeElement) {
        action();
      }
    },
    isEnterEvent: function (event, action) {
      if (event.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    // Accepts array and returns integer number depends on array length
    getRandomNumber: function (array) {
      var index = Math.floor(Math.random() * array.length);
      return index;
    }
  };
})();
