'use strict';

(function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarListElement = document.querySelector('.setup-similar-list');

  var SmallWizard = function (name, colorCoat, colorEyes) {
    this.name = name;
    this.colorCoat = colorCoat;
    this.colorEyes = colorEyes;
  };

  // Create wizard element by cloning template wizard element
  var createWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    var wizardInstance = new SmallWizard(wizard.name, wizard.colorCoat, wizard.colorEyes);
    wizardElement.querySelector('.setup-similar-label').textContent = wizardInstance.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizardInstance.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizardInstance.colorEyes;
    return wizardElement;
  };

  // Get sorted wizard by rank and insert them in DOM
  var showWizards = function (data) {
    var fragment = document.createDocumentFragment();
    similarListElement.innerHTML = '';
    for (var i = 0; i < window.wizardConsts.QUANTITY; i++) {
      fragment.appendChild(createWizard(data[i]));
    }
    similarListElement.appendChild(fragment);
    window.dialog.setupWindow.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.render = {
    showWizards: showWizards
  };
})();
