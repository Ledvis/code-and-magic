'use strict';

(function () {
  var SAVE_URL = 'https://js.dump.academy/code-and-magick/data';
  var LOAD_URL = 'https://js.dump.academy/code-and-magick';
  var XHR_TIMEOUT = 3000;
  var Code = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404
  };

  var initXHR = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      var error;

      switch (xhr.status) {
        case Code.OK:
          onLoad(xhr.response);
          break;
        case Code.BAD_REQUEST:
          error = 'Неверный запрос';
          break;
        case Code.UNAUTHORIZED:
          error = 'Пользователь не авторизирован';
          break;
        case Code.NOT_FOUND:
          error = 'Ничего не найдено';
          break;
        default:
          error = 'Неизвестный статус: ' + xhr.status + ' ' + xhr.statusText;
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
    xhr.timeout = XHR_TIMEOUT;

    return xhr;
  };

  window.backend = {
    download: function (onLoad, onError) {
      var xhr = initXHR(onLoad, onError);

      xhr.open('GET', SAVE_URL);
      xhr.send();
    },
    upload: function (data, onLoad, onError) {
      var xhr = initXHR(onLoad, onError);

      xhr.open('POST', LOAD_URL);
      xhr.send(data);
    }
  };
})();
