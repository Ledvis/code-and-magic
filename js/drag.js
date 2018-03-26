'use strict';

(function () {
  var windowHandle = window.dialog.setupWindow.querySelector('.setup-user-pic');
  var windowSetupInitialPosition = {
    x: window.dialog.setupWindow.style.left,
    y: window.dialog.setupWindow.style.top
  };

  var onMouseDownClick = function (event) {
    event.preventDefault();

    var startSetupCordinate = {
      x: window.dialog.setupWindow.offsetLeft,
      y: window.dialog.setupWindow.offsetTop
    };
    var innerShift = {
      x: startSetupCordinate.x - event.clientX,
      y: startSetupCordinate.y - event.clientY
    };
    var onMouseMove = function (eventMouseMove) {
      eventMouseMove.preventDefault();

      window.dialog.setupWindow.style.top = (eventMouseMove.clientY + innerShift.y) + 'px';
      window.dialog.setupWindow.style.left = (eventMouseMove.clientX + innerShift.x) + 'px';
    };
    var onMouseUp = function (eventMouseUp) {
      eventMouseUp.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  windowHandle.addEventListener('mousedown', onMouseDownClick);

  window.drag = {
    setUserSetupInitialPosition: function () {
      window.dialog.setupWindow.style.left = windowSetupInitialPosition.x;
      window.dialog.setupWindow.style.top = windowSetupInitialPosition.y;
    }
  };
})();
