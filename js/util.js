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
    // Accepts array and returns random index depends on array length
    getRandomIndex: function (arr) {
      return Math.floor(Math.random() * arr.length);
    }
  };
})();
