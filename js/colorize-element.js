'use strict';

(function () {
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  window.colorize = {
    mainWizard: window.dialog.userSetup.querySelector('.setup-wizard'),
    fireball: window.dialog.userSetup.querySelector('.setup-fireball-wrap'),
    onWizardClick: function (event) {
      var target = event.target;

      if (target.classList.value === 'wizard-coat') {
        target.style.fill = window.setup.WIZARD_COAT_COLORS[window.util.getRandomNumber(window.setup.WIZARD_COAT_COLORS)];
      } else if (target.classList.value === 'wizard-eyes') {
        target.style.fill = window.setup.WIZARD_EYES_COLORS[window.util.getRandomNumber(window.setup.WIZARD_EYES_COLORS)];
      }
    },
    onFieballClick: function () {
      this.fireball.style.backgroundColor = FIREBALL_COLORS[window.util.getRandomNumber(FIREBALL_COLORS)];
    }
  };
})();

