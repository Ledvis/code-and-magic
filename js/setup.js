'use strict';

(function () {
  var WIZZARDS_QUANTITY = 4;
  var similarListElement = document.querySelector('.setup-similar-list');
  var wizardsArray = [];

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var j = 0; j < WIZZARDS_QUANTITY; j++) {
      fragment.appendChild(window.render(wizards[j]));
    }

    similarListElement.appendChild(fragment);

    window.dialog.userSetup.querySelector('.setup-similar').classList.remove('hidden');

    wizardsArray = wizards;
  };

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

  window.setup = {
    // Big wizard click handler
    onWizardClick: function (event) {
      if (event.target.classList.value === 'wizard-coat') {
        window.colorizeElement(event, wizardsArray.colorCoat);
      } else if (event.target.classList.value === 'wizard-eyes') {
        window.colorizeElement(event, wizardsArray.colorEyes);
      }
    },
    // Fireball click handler
    onFireballClick: function (event) {
      window.colorizeElement(event, wizardsArray.colorFireball);
    }
  };
})();
