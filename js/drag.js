'use strict';

(function () {
  var windowHandler = window.dialog.setupWindow.querySelector('.upload');
  var dragged;

  var windowSetupInitialPosition = {
    x: window.dialog.setupWindow.style.left,
    y: window.dialog.setupWindow.style.top
  };

  var onMouseDownClick = function (event) {
    event.preventDefault();

    dragged = false;
    var startSetupCordinate = {
      x: window.dialog.setupWindow.offsetLeft,
      y: window.dialog.setupWindow.offsetTop
    };

    var innerShift = {
      x: startSetupCordinate.x - event.clientX,
      y: startSetupCordinate.y - event.clientY
    };

    var onMouseMove = function (moveEvent) {
      moveEvent.preventDefault();
      dragged = true;

      window.dialog.setupWindow.style.top = (moveEvent.clientY + innerShift.y) + 'px';
      window.dialog.setupWindow.style.left = (moveEvent.clientX + innerShift.x) + 'px';
    };

    var onMouseUp = function (upEvent) {
      upEvent.preventDefault();

      if (dragged) {
        var onClickPreventDefault = function (clickEvent) {
          clickEvent.preventDefault();
          windowHandler.removeEventListener('click', onClickPreventDefault);
        };
        windowHandler.addEventListener('click', onClickPreventDefault);
      }

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  windowHandler.addEventListener('mousedown', onMouseDownClick);

  window.drag = {
    setUserSetupInitialPosition: function () {
      window.dialog.setupWindow.style.left = windowSetupInitialPosition.x;
      window.dialog.setupWindow.style.top = windowSetupInitialPosition.y;
    }
  };
})();
