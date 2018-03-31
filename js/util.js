'use strict';

(function () {
  var KeyCode = {
    ESC: 27,
    ENTER: 13
  };

  window.util = {
    isEscEvent: function (event, action) {
      if (event.keyCode === KeyCode.ESC && window.dialog.userNameInput !== document.activeElement) {
        action();
      }
    },
    isEnterEvent: function (event, action) {
      if (event.keyCode === KeyCode.ENTER) {
        action();
      }
    },
    // Accepts array and returns random index depends on array length
    getRandomIndex: function (arr) {
      return Math.floor(Math.random() * arr.length);
    }
  };
})();
