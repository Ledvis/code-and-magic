'use strict';

(function () {
  var similarListElement = document.querySelector('.setup-similar-list');

  var succesFormHandler = function () {
    window.dialog.closePopup();
    window.notification.showInfo();
  };

  var onFormSubmit = function (event) {
    window.backend.upload(new FormData(formElement), succesFormHandler, window.notification.showError);
    event.preventDefault();
  };

  var formElement = document.querySelector('.setup-wizard-form');

  formElement.addEventListener('submit', onFormSubmit);

  window.backend.download(successHandler, window.notification.showError);
})();
