'use strict';

(function () {
  var WIZZARDS_QUANTITY = 4;
  var mainWizardElement = window.setupWindow.querySelector('.setup-wizard');
  var fireballElement = window.setupWindow.querySelector('.setup-fireball-wrap');
  var coatColor;
  var eyesColor;
  var loadedWizards = [];

  var loadWizards = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var j = 0; j < WIZZARDS_QUANTITY; j++) {
      fragment.appendChild(window.render(wizards[j]));
    }

    similarListElement.appendChild(fragment);

    window.dialog.userSetup.querySelector('.setup-similar').classList.remove('hidden');

    loadedWizards = wizards;
  };

  // Big wizard click handler
  onWizardClick: function (event) {
    if (event.target.classList.value === 'wizard-coat') {
      window.colorizeElement(event, loadedWizards.colorCoat);
    } else if (event.target.classList.value === 'wizard-eyes') {
      window.colorizeElement(event, loadedWizards.colorEyes);
    }
  },
  // Fireball click handler
  onFireballClick: function (event) {
    window.colorizeElement(event, loadedWizards.colorFireball);
  }

  window.wizard = {
    mainWizard: mainWizardElement,
    fireball: fireballElement
  };
})();
