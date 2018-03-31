'use strict';

(function () {
  var shopElement = window.dialog.setupWindow.querySelector('.setup-artifacts-shop');
  var artifactsElement = window.dialog.setupWindow.querySelector('.setup-artifacts');
  var dragItem = null;

  var onStarDragStart = function (event) {
    if (event.target.tagName.toLowerCase() === 'img') {
      dragItem = event.target;
      artifactsElement.style.backgroundColor = 'yellow';
      // The dataTransfer.setData() method sets the data type and the value of the dragged data
      event.dataTransfer.setData('text/plain', event.target.alt);
    } else {
      event.preventDefault();
    }
  };

  var onStarDragEnd = function (event) {
    if (event.target.tagName.toLowerCase() === 'img') {
      artifactsElement.style.backgroundColor = '';
    }
  };

  var onShopElementCellDragOver = function (event) {
    event.preventDefault();
    return false;
  };

  var onShopElementCellDragEnter = function (event) {
    event.target.style.border = '2px dashed red';
    event.preventDefault();
  };

  var onShopElementCellDragLeave = function (event) {
    event.target.style.border = '';
    event.preventDefault();
  };

  shopElement.addEventListener('dragstart', onStarDragStart);

  // Prevent dragging stars from setupArtifacts DIV
  artifactsElement.addEventListener('dragstart', function (event) {
    event.preventDefault();
    return false;
  });

  shopElement.addEventListener('dragend', onStarDragEnd);

  /*
  By default, data/elements cannot be dropped in other elements.
  To allow a drop, we must prevent the default handling of the element
  */
  artifactsElement.addEventListener('dragover', onShopElementCellDragOver);

  // When the draggable img element enters the droptarget, change the DIVS's border style
  artifactsElement.addEventListener('dragenter', onShopElementCellDragEnter);

  // When the draggable img element leaves the droptarget, reset the DIVS's border style
  artifactsElement.addEventListener('dragleave', onShopElementCellDragLeave);

  /* On drop - Prevent the browser default handling of the data (default is open as link on drop)
    Get the dragged data with the dataTransfer.getData() method
    The dragged data is the id of the dragged element ("drag1")
    Append the dragged cloned img element into the drop element
  */
  artifactsElement.addEventListener('drop', function (event) {
    if (event.target.tagName.toLowerCase !== 'img' && event.target.children.length === 0) {
      event.target.appendChild(dragItem.cloneNode(true));
      event.target.style.border = '';
      event.preventDefault();
    }

    event.target.style.border = '';
  });
})();
