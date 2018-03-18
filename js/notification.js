'use strict';

(function () {
  var createNotification = function (message) {
    var node = document.createElement('div');

    node.style = 'margin: 0, auto; text-align: center; background-color: rgba(0, 127, 235, 0.8);';
    node.style.zIndex = '100';
    node.style.position = 'absolute';
    node.style.left = '0';
    node.style.right = '0';
    node.style.fontSize = '30px';
    node.textContent = message;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.notification = {
    showError: function (errorMessage) {
      createNotification(errorMessage);
    },
    showInfo: function () {
      createNotification('Форма отправлена успешно!');
    }
  };
})();
