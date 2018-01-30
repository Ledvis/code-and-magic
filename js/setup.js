'use strict';

var WIZARD_NAMES = ['Дамболдор', 'Гарри Поттер', 'Волан Де Морт', 'Хагрид', 'Люпин', 'Сириус', 'Малфой'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userSetup = document.querySelector('.setup');
userSetup.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizards = [];

var createWizardsArray = function (name, surname, coatColor, eyesColor) {
  var wizadrObject = {};
  wizadrObject.name = name + ' ' + surname;
  wizadrObject.coatColor = coatColor;
  wizadrObject.eyesColor = eyesColor;
  wizards.push(wizadrObject);
};

var getRandomItem = function (array) {
  var item = Math.floor(Math.random() * array.length);
  return item;
};

for (var i = 0; i < 4; i++) {
  createWizardsArray(WIZARD_NAMES[getRandomItem(WIZARD_NAMES)], WIZARD_SURNAMES[getRandomItem(WIZARD_SURNAMES)],
      WIZARD_COAT_COLORS[getRandomItem(WIZARD_COAT_COLORS)], WIZARD_EYES_COLORS[getRandomItem(WIZARD_EYES_COLORS)]);
}

var createWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(createWizard(wizards[j]));
}

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
