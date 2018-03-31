'use strict';

(function () {
  var createNotification = function (message) {
    var node = document.createElement('div');
    node.classList.add('notification');
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
