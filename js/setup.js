'use strict';

(function () {
  var WIZARD_NAMES = ['Дамболдор', 'Гарри Поттер', 'Волан Де Морт', 'Хагрид', 'Люпин', 'Сириус', 'Малфой'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarListElement = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();
  var wizards = [];

  // Create wizard element by cloning template wizard element
  var createWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  // Create random wizards
  var createWizardsArray = function (name, surname, coatColor, eyesColor) {
    var wizadrObject = {};
    wizadrObject.name = name + ' ' + surname;
    wizadrObject.coatColor = coatColor;
    wizadrObject.eyesColor = eyesColor;
    wizards.push(wizadrObject);
  };

  var getRandomName = function () {
    var wizardName = WIZARD_NAMES[window.util.getRandomNumber(WIZARD_NAMES)];
    return wizardName;
  };

  var getRandomSurname = function () {
    var wizarardSurname = WIZARD_SURNAMES[window.util.getRandomNumber(WIZARD_SURNAMES)];
    return wizarardSurname;
  };

  var getRandomEyesColor = function () {
    var wizardEyesColor = WIZARD_EYES_COLORS[window.util.getRandomNumber(WIZARD_EYES_COLORS)];
    return wizardEyesColor;
  };

  var getRandomCoatColor = function () {
    var wizardCoatColor = WIZARD_COAT_COLORS[window.util.getRandomNumber(WIZARD_COAT_COLORS)];
    return wizardCoatColor;
  };

  for (var i = 0; i < 4; i++) {
    createWizardsArray(getRandomName(), getRandomSurname(), getRandomEyesColor(), getRandomCoatColor());
  }

  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(createWizard(wizards[j]));
  }

  similarListElement.appendChild(fragment);

  document.querySelector('.setup-similar').classList.remove('hidden');

  window.setup = {
    // Big wizard click handler
    onWizardClick: function (event) {
      if (event.target.classList.value === 'wizard-coat') {
        window.colorizeElement(event, WIZARD_COAT_COLORS);
      } else if (event.target.classList.value === 'wizard-eyes') {
        window.colorizeElement(event, WIZARD_EYES_COLORS);
      }
    },
    // Fireball click handler
    onFireballClick: function (event) {
      window.colorizeElement(event, FIREBALL_COLORS);
    }
  };
})();
