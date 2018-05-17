'use strict';

(function () {
  window.getRandomNumber = function (max,min) {
    return Math.floor((min || 0) + Math.random() * max)
  };
})();
