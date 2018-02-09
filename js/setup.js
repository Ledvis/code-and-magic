'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var WIZARD_NAMES = ['Дамболдор', 'Гарри Поттер', 'Волан Де Морт', 'Хагрид', 'Люпин', 'Сириус', 'Малфой'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userSetup = document.querySelector('.setup');
var userSetupOpen = document.querySelector('.setup-open');
var userSetupClose = userSetup.querySelector('.setup-close');
var userNameInput = userSetup.querySelector('.setup-user-name');

var showCustomError = function () {
  if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else if (userNameInput.validity.tooShort) {
    var minLength = userNameInput.getAttribute('minlength');
    userNameInput.setCustomValidity('Имя должно состоять минимум из ' + minLength + '-х символов');
  } else if (userNameInput.validity.tooLong) {
    var maxLength = userNameInput.getAttribute('maxlength');
    userNameInput.setCustomValidity('Имя не должно превышать ' + maxLength + '-ти символов');
  } else {
    userNameInput.setCustomValidity('');
  }
};

var showFallbackCustomShortError = function () {
  if (userNameInput.value.length < 2) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    userNameInput.setCustomValidity('');
  }
};

userNameInput.addEventListener('invalid', function () {
  showCustomError();
});

// Falback custom 'tooShort' error message for Edge Browser
userNameInput.addEventListener('input', function () {
  showFallbackCustomShortError();
});

var onSetupEscPress = function (event) {
  if (event.keyCode === ESC_KEYCODE && userNameInput !== document.activeElement) {
    closePopup();
  }
};

// Press on button userSetupOpen removs class hidden from userSetup block
var openSetup = function () {
  userSetup.classList.remove('hidden');
  document.addEventListener('keydown', onSetupEscPress);
  mainWizard.addEventListener('click', onWizardClick);
  fireball.addEventListener('click', onFieballClick);
};

// Press on button userSetupClose revert class hidden to userSetup block
var closePopup = function () {
  userSetup.classList.add('hidden');
  document.removeEventListener('keydown', onSetupEscPress);
  mainWizard.removeEventListener('click', onWizardClick);
  fireball.removeEventListener('click', onFieballClick);
};

userSetupOpen.addEventListener('click', function () {
  openSetup();
});

userSetupClose.addEventListener('click', function () {
  closePopup();
});

userSetupOpen.addEventListener('keydown', function (event) {
  if (event.keyCode === ENTER_KEYCODE) {
    openSetup();
  }
});

userSetupClose.addEventListener('keydown', function (event) {
  if (event.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var getRandomNumber = function (array) {
  var item = Math.floor(Math.random() * array.length);
  return item;
};

var onWizardClick = function (event) {
  var target = event.target;

  if (target.classList.value === 'wizard-coat') {
    target.style.fill = WIZARD_COAT_COLORS[getRandomNumber(WIZARD_COAT_COLORS)];
  } else if (target.classList.value === 'wizard-eyes') {
    target.style.fill = WIZARD_EYES_COLORS[getRandomNumber(WIZARD_EYES_COLORS)];
  }
};

var onFieballClick = function () {
  fireball.style.backgroundColor = FIREBALL_COLORS[getRandomNumber(FIREBALL_COLORS)];
};

var mainWizard = userSetup.querySelector('.setup-wizard');
var fireball = userSetup.querySelector('.setup-fireball-wrap');

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

for (var i = 0; i < 4; i++) {
  createWizardsArray(WIZARD_NAMES[getRandomNumber(WIZARD_NAMES)], WIZARD_SURNAMES[getRandomNumber(WIZARD_SURNAMES)],
      WIZARD_COAT_COLORS[getRandomNumber(WIZARD_COAT_COLORS)], WIZARD_EYES_COLORS[getRandomNumber(WIZARD_EYES_COLORS)]);
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
