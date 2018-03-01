'use strict';

(function () {
  var loader = document.createElement('script');

  loader.src = 'https://js.dump.academy/code-and-magick/data?callback=load.jsonpCallback';

  document.body.appendChild(loader);

  window.load = {
    dataHandler: null,
    jsonpCallback: function (data) {
      this.dataHandler(data);
    }
  };
})();
