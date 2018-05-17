'use strict';

(function () {

  var ESC_KEY = 27;
  var ENTER_KEY = 13;

  window.util = {
    isEscEvent: function (event,action) {
      if(event.keyCode === ESC_KEY) action()
    },
    isEnterEvent: function (event,action) {
      if(event.keyCode === ENTER_KEY) action()
    }
  }
})();