'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
  var imageChooser = document.querySelector('input[name="avatar"]');
  var previewAvatar = document.querySelector('.setup-user-pic');

  imageChooser.addEventListener('change', function () {
    var file = imageChooser.files[0];
    var fileName = file.name.toLowerCase();
    var matches = FILE_TYPES.some(function (element) {
      return fileName.endsWith(element);
    });

    if (matches) {
      var reader = new FileReader();

      reader.readAsDataURL(file);

      reader.addEventListener('load', function () {
        previewAvatar.src = reader.result;
      });
    }
  });
})();
