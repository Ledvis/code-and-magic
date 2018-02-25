'use strict';

(function () {
  var userSetup = document.querySelector('.setup');
  var userSetupOpen = document.querySelector('.setup-open');
  var userSetupClose = userSetup.querySelector('.setup-close');
  var mainWizardElement = userSetup.querySelector('.setup-wizard');
  var fireballElement = userSetup.querySelector('.setup-fireball-wrap');

  var openPopup = function () {
    userSetup.classList.remove('hidden');
    document.addEventListener('keydown', onSetupEscPress);
    mainWizardElement.addEventListener('click', window.setup.onWizardClick);
    fireballElement.addEventListener('click', window.setup.onFireballClick);
    window.drag.setUserSetupInitialPosition();
  };

  var closePopup = function () {
    userSetup.classList.add('hidden');
    document.removeEventListener('keydown', onSetupEscPress);
    mainWizardElement.removeEventListener('click', window.setup.onWizardClick);
    fireballElement.removeEventListener('click', window.setup.onFireballClick);
  };

  // ESC key handler
  var onSetupEscPress = function (event) {
    window.util.isEscEvent(event, closePopup);
  };

  // Click on user photo remove hidden class from popup window
  userSetupOpen.addEventListener('click', openPopup);

  // Click on cross icon add class hidden to popup window
  userSetupClose.addEventListener('click', closePopup);

  // Check wheater ESC button is pressed when popus is opened
  userSetupOpen.addEventListener('keydown', function (event) {
    window.util.isEnterEvent(event, openPopup);
  });

  // Check wheater ENTER button is pressed on cross icon when popus is opened
  userSetupClose.addEventListener('keydown', function (event) {
    window.util.isEnterEvent(event, closePopup);
  });

  window.dialog = {
    userSetup: userSetup
  };
})();
