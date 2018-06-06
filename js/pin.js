'use strict';
(function () {

  var templatePins = document.body.querySelector('template').content.querySelector('.map__pin');
  var fragmentPins = document.createDocumentFragment();
  var mapPins = document.querySelector('.map__pins');
  var noticeForm = document.querySelector('.notice__form');
  var map = document.body.querySelector('.map');


  window.pin = {
    showErrorMessage: function(message){
      var div = document.createElement('div');
      div.cssText = 'margin: 0 auto; background-color: red; z-index: 100; position: absolute; left: 0; right: 0; padding: 5px;';
      div.style.textAlign = 'center';
      div.style.fontSize = '30px';
      div.textContent = message;
      document.body.insertAdjacentElement('afterbegin',div);
    },
    renderPin: function(pin){
      var clone = templatePins.cloneNode(true);
      clone.style.left = pin.location.x  + 'px';
      clone.style.top = pin.location.y - 38 + 'px';
      clone.querySelector('img').src = pin.author.avatar;
      return clone;
    },
    renderPins: function(ads){
      for(var i = 0;i < ads.length ;i++){
        fragmentPins.appendChild(window.pin.renderPin(ads[i]))
      }
      mapPins.appendChild(fragmentPins);
    },
    showPins: function () {
      map.classList.remove('map--faded');
      window.backend.load(window.pin.renderPins,window.pin.showErrorMessage);
      noticeForm.classList.remove('notice__form--disabled');
    }
  };
})();