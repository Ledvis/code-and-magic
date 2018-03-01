'use strict';

(function () {
  var WIZZARDS_QUANTITY = 4;
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarListElement = document.querySelector('.setup-similar-list');
  var wizardsArray = [];

  // Create wizard element by cloning template wizard element
  var createWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var j = 0; j < WIZZARDS_QUANTITY; j++) {
      fragment.appendChild(createWizard(wizards[j]));
    }

    similarListElement.appendChild(fragment);

    window.dialog.userSetup.querySelector('.setup-similar').classList.remove('hidden');

    wizardsArray = wizards;
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');

    node.style = 'margin: 0, auto; text-align: center; background-color: rgba(0, 127, 235, 0.8);';
    node.style.zIndex = '100';
    node.style.position = 'absolute';
    node.style.left = '0';
    node.style.right = '0';
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var onFormSubmit = function (event) {
    window.backend.upload(new FormData(formElement), window.dialog.closePopup);
    event.preventDefault();
  };

  var formElement = document.querySelector('.setup-wizard-form');

  formElement.addEventListener('submit', onFormSubmit);

  window.backend.download(successHandler, errorHandler);

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
