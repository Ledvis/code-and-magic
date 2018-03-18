'use strict';

(function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarListElement = document.querySelector('.setup-similar-list');

  // Create wizard element by cloning template wizard element
  var createWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  // Insert similar wizards to the DOM element
  var showWizards = function (data) {
    var fragment = document.createDocumentFragment();
    similarListElement.innerHTML = '';
    for (var j = 0; j < window.wizardConsts.QUANTITY; j++) {
      fragment.appendChild(createWizard(data[j]));
    }
    similarListElement.appendChild(fragment);
    window.dialog.setupWindow.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.render = {
    showWizards: showWizards
  };
})();
