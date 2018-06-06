'use strict';

(function () {

  var URL_LOAD = 'https://js.dump.academy/keksobooking/data';
  var URL_SAVE = 'https://js.dump.academy/keksobooking';

  window.backend = {
    load: function (onLoad,onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onLoad(xhr.response);
        } else onError('Неизвестная ошибка ' + xhr.status + ' ' + xhr.statusText);
      });

      xhr.addEventListener('error',function () {
        onError('Произошла ошибка соединения.')
      });
      xhr.addEventListener('timeout',function () {
        onError('Таймаут соединения в ' + xhr.timeout + 'mc')
      });
      xhr.open('GET',URL_LOAD);
      xhr.send();
    },
    save: function (data,onLoad,onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.addEventListener('load',function () {
        if (xhr.status === 200) {
        onLoad(xhr.response);
        } else onError('Неизвестная ошибка ' + xhr.status + ' ' + xhr.statusText);
      });
      xhr.addEventListener('error',function () {
        onError('Ошибка ' + xhr.status + ' ' + xhr.statusText);
      });
      xhr.open('POST',URL_SAVE);
      xhr.send(data);
    }
  }
})();