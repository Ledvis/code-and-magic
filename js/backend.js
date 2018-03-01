'use strict';

(function () {
  window.backend = {
    download: function (onSuccess, onError) {
      var URL = 'https://js.dump.academy/code-and-magick/data';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        var error;

        switch (xhr.status) {
          case 200:
            onSuccess(xhr.response);
            break;
          case 400:
            error = 'Неверный запрос';
            break;
          case 401:
            error = 'Пользователь не авторизирован';
            break;
          case 404:
            error = 'Ничего не найдено';
            break;
          default:
            error = 'Неизвестный статус: ' + xhr.status + ' ' + xhr.statusText;
            break;
        }

        if (error) {
          onError(error);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });

      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполнится за ' + xhr.timeout + 'мс');
      });

      xhr.timeout = '3000';

      xhr.open('GET', URL);

      xhr.send();
    },

    upload: function (data, onSuccess) {
      var URL = 'https://js.dump.academy/code-and-magick';
      var xhr = new XMLHttpRequest();

      xhr.responseType = 'json';

      xhr.addEventListener('load', onSuccess);

      xhr.open('POST', URL);
      xhr.send(data);
    }
  };
})();
