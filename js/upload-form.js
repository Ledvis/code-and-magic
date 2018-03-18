'use strict';

(function () {
  var formElement = document.querySelector('.setup-wizard-form');
  var succesFormHandler = function () {
    window.dialog.closeWindow();
    window.notification.showInfo();
  };
  var onFormSubmit = function (event) {
    window.backend.upload(new FormData(formElement), succesFormHandler, window.notification.showError);
    event.preventDefault();
  };
  formElement.addEventListener('submit', onFormSubmit);
})();
