'use strict';

(function () {
  var mainWizardElement = window.dialog.setupWindow.querySelector('.setup-wizard');
  var fireballElement = window.dialog.setupWindow.querySelector('.setup-fireball-wrap');
  var coatColor;
  var eyesColor;
  var loadedWizards = [];

  // Big wizard click handlers
  var bigWizard = {
    changeEyesColor: function (color) {
      eyesColor = color;
      window.debounce(updateWizards);
    },
    changeCoatColor: function (color) {
      coatColor = color;
      window.debounce(updateWizards);
    }
  };

  var onWizardClick = function (event) {
    if (event.target.classList.value === 'wizard-coat') {
      var newCoatColor = window.wizardConsts.COAT_COLORS[window.util.getRandomIndex(window.wizardConsts.COAT_COLORS)];
      window.colorizeElement(event, newCoatColor);
      bigWizard.changeCoatColor(newCoatColor);
    } else if (event.target.classList.value === 'wizard-eyes') {
      var newEyesColor = window.wizardConsts.EYES_COLORS[window.util.getRandomIndex(window.wizardConsts.EYES_COLORS)];
      window.colorizeElement(event, newEyesColor);
      bigWizard.changeEyesColor(newEyesColor);
    }
  };

  // Fireball click handler
  var onFireballClick = function (event) {
    var newFireballColor = window.wizardConsts.FIREBALL_COLORS[window.util.getRandomIndex(window.wizardConsts.FIREBALL_COLORS)];
    window.colorizeElement(event, newFireballColor);
  };

  var getRank = function (person) {
    var rank = 0;

    if (person.colorCoat === coatColor) {
      rank += 2;
    }
    if (person.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.render.showWizards(loadedWizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  var successLoadDataHandler = function (loadedData) {
    loadedWizards = loadedData;
    updateWizards();
  };

  window.backend.download(successLoadDataHandler, window.notification.showError);

  window.wizard = {
    mainWizard: mainWizardElement,
    fireball: fireballElement,
    onWizardClick: onWizardClick,
    onFireballClick: onFireballClick,
    successLoadDataHandler: successLoadDataHandler
  };
})();
