'use strict';
(function () {

  var templatePins = document.body.querySelector('template').content.querySelector('.map__pin');
  var fragmentPins = document.createDocumentFragment();
  var mapPins = document.querySelector('.map__pins');
  var noticeForm = document.querySelector('.notice__form');
  var map = document.body.querySelector('.map');
  var mapPinMain = document.querySelector('.map__pin--main');

  window.pin = {
    renderPin: function(pin){
      var clone = templatePins.cloneNode(true);
      clone.style.left = pin.location.x  + 'px';
      clone.style.top = pin.location.y - 38 + 'px';
      clone.querySelector('img').src = pin.author.avatar;
      return clone;
    },
    renderPins: function(){
      for(var i = 0;i < window.data.ads.length;i++){
        fragmentPins.appendChild(window.pin.renderPin(window.data.ads[i]))
      }
      return fragmentPins;
    },
    showPins: function () {
      map.classList.remove('map--faded');
      mapPins.appendChild(window.pin.renderPins());
      noticeForm.classList.remove('notice__form--disabled');
      mapPinMain.removeEventListener('mouseup',window.pin.showPins);
    }
  };

  mapPinMain.addEventListener('mouseup',window.pin.showPins);

})();