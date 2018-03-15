'use strict';

(function () {
  var dialogHandle = window.dialog.userSetup.querySelector('.setup-user-pic');

  var userSetupInitialPosition = {
    x: window.dialog.userSetup.style.left,
    y: window.dialog.userSetup.style.top
  };

  dialogHandle.addEventListener('mousedown', function (event) {
    event.preventDefault();

    var startSetupCordinate = {
      x: window.dialog.userSetup.offsetLeft,
      y: window.dialog.userSetup.offsetTop
    };

    var innerShift = {
      x: startSetupCordinate.x - event.clientX,
      y: startSetupCordinate.y - event.clientY
    };

    var onMouseMove = function (eventMouseMove) {
      eventMouseMove.preventDefault();

      window.dialog.userSetup.style.top = (eventMouseMove.clientY + innerShift.y) + 'px';
      window.dialog.userSetup.style.left = (eventMouseMove.clientX + innerShift.x) + 'px';
    };

    var onMouseUp = function (eventMouseUp) {
      eventMouseUp.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  window.drag = {
    setUserSetupInitialPosition: function () {
      window.dialog.userSetup.style.left = userSetupInitialPosition.x;
      window.dialog.userSetup.style.top = userSetupInitialPosition.y;
    }
  };
})();
