'use strict';

(function () {
  var userSetup = document.querySelector('.setup');
  var userSetupOpen = document.querySelector('.setup-open');
  var userSetupClose = userSetup.querySelector('.setup-close');

  var openPopup = function () {
    userSetup.classList.remove('hidden');
    document.addEventListener('keydown', onSetupEscPress);
    window.colorize.mainWizard.addEventListener('click', window.colorize.onWizardClick);
    window.colorize.fireball.addEventListener('click', window.colorize.onFieballClick);
    window.drag.setUserSetupInitialPosition();
  };

  // Press on button userSetupClose revert class hidden to userSetup block
  var closePopup = function () {
    userSetup.classList.add('hidden');
    document.removeEventListener('keydown', onSetupEscPress);
    window.colorize.mainWizard.removeEventListener('click', window.colorize.onWizardClick);
    window.colorize.fireball.removeEventListener('click', window.colorize.onFieballClick);
  };

  // Escape key handler
  var onSetupEscPress = function (event) {
    window.util.isEscEvent(event, closePopup);
  };

  userSetupOpen.addEventListener('click', function () {
    openPopup();
  });

  // Press on button userSetupOpen removes class hidden from userSetup block
  userSetupClose.addEventListener('click', function () {
    closePopup();
  });

  userSetupOpen.addEventListener('keydown', function (event) {
    window.util.isEnterEvent(event, openPopup);
  });

  userSetupClose.addEventListener('keydown', function (event) {
    window.util.isEnterEvent(event, closePopup);
  });

  window.dialog = {
    userSetup: userSetup
  };
})();
