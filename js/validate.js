'use strict';

(function () {
  var userNameInput = window.dialog.setupWindow.querySelector('.setup-user-name');
  var showCustomError = function () {
    if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else if (userNameInput.validity.tooShort) {
      var minLength = userNameInput.getAttribute('minlength');
      userNameInput.setCustomValidity('Имя должно состоять минимум из ' + minLength + '-х символов');
    } else if (userNameInput.validity.tooLong) {
      var maxLength = userNameInput.getAttribute('maxlength');
      userNameInput.setCustomValidity('Имя не должно превышать ' + maxLength + '-ти символов');
    } else {
      userNameInput.setCustomValidity('');
    }
  };
  var showFallbackCustomShortError = function () {
    if (window.dialog.userNameInput.value.length < 2) {
      window.dialog.userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else {
      window.dialog.userNameInput.setCustomValidity('');
    }
  };

  userNameInput.addEventListener('invalid', function () {
    showCustomError();
  });
  // Falback custom 'tooShort' error message for Edge Browser
  userNameInput.addEventListener('input', function () {
    showFallbackCustomShortError();
  });
})();
