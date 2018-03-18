'use strict';

(function () {
  var userSetupWindow = document.querySelector('.setup');
  var userSetupOpenElement = document.querySelector('.setup-open');
  var userSetupCloseElement = userSetupWindow.querySelector('.setup-close');
  var openWindow = function () {
    userSetupWindow.classList.remove('hidden');
    document.addEventListener('keydown', onSetupEscPress);
    window.wizard.mainWizard.addEventListener('click', window.wizard.onWizardClick);
    window.wizard.fireball.addEventListener('click', window.wizard.onFireballClick);
    window.drag.setUserSetupInitialPosition();
  };
  var closeWindow = function () {
    userSetupWindow.classList.add('hidden');
    document.removeEventListener('keydown', onSetupEscPress);
    window.wizard.mainWizard.removeEventListener('click', window.wizard.onWizardClick);
    window.wizard.fireball.removeEventListener('click', window.wizard.onFireballClick);
  };
  // ESC key handler
  var onSetupEscPress = function (event) {
    window.util.isEscEvent(event, closeWindow);
  };

  // Click on user photo remove hidden class from popup window
  userSetupOpenElement.addEventListener('click', openWindow);
  // Click on cross icon add class hidden to popup window
  userSetupCloseElement.addEventListener('click', closeWindow);
  // Check wheater ESC button is pressed when popus is opened
  userSetupOpenElement.addEventListener('keydown', function (event) {
    window.util.isEnterEvent(event, openWindow);
  });
  // Check wheater ENTER button is pressed on cross icon when popus is opened
  userSetupCloseElement.addEventListener('keydown', function (event) {
    window.util.isEnterEvent(event, closeWindow);
  });

  window.dialog = {
    setupWindow: userSetupWindow,
    closeWindow: closeWindow
  };
})();
