'use strict';
(function () {

  var templatePins = document.body.querySelector('template').content.querySelector('.map__pin');
  var fragmentPins = document.createDocumentFragment();
  var mapPins = document.querySelector('.map__pins');
  var noticeForm = document.querySelector('.notice__form');
  var map = document.body.querySelector('.map');
  var myPin = map.querySelector('.map__pin--main');

  var filterType = document.querySelector('#housing-type');
  var filterPrice = document.querySelector('#housing-price');
  var filterRooms = document.querySelector('#housing-rooms');
  var filterQuests = document.querySelector('#housing-guests');

  window.dataPins = [];

  var cleanPins = function(pins){
    pins.forEach(function (item) {
      if(item.contains(myPin)){
        return false;
      }
      mapPins.removeChild(item);
    })
  };

  var verifedPrice = function (value) {
    if (filterPrice.value === 'middle' && value >= 1000 && value <= 50000) {return true}
    if (filterPrice.value === 'low' && value <= 1000) {return true}
    if (filterPrice.value === 'high' && value > 50000) {return true}
  };

  var filterPins = function(){
    window.newData = [];
    window.newData = window.dataPins.filter(function (value) {
      return ((value.offer.type === filterType.value || filterType.value === 'any') && (verifedPrice(value.offer.price) || filterPrice.value === 'any') &&
          (value.offer.rooms === +filterRooms.value || filterRooms.value === 'any') && (value.offer.guests === +filterQuests.value || filterQuests.value === 'any'));
    });
    window.pin.renderPins(window.newData)
  };

  filterType.addEventListener('change',function () {
    filterPins();
  });

  filterPrice.addEventListener('change',function () {
    filterPins();
  });

  filterRooms.addEventListener('change',function () {
    filterPins();
  });

  filterQuests.addEventListener('change',function () {
    filterPins();
  });

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
      if(mapPins.querySelectorAll('.map__pin')) cleanPins(mapPins.querySelectorAll('.map__pin'));
      for(var i = 0;i < ads.length ;i++){
        fragmentPins.appendChild(window.pin.renderPin(ads[i]))
      }
      mapPins.appendChild(fragmentPins);
    },
    showPinsWithoutFilter: function(data){
      window.dataPins = data;
      // window.dataPins.push(myPin);
      window.pin.renderPins(window.dataPins)
    },
    showPins: function () {
      map.classList.remove('map--faded');
      window.backend.load(window.pin.showPinsWithoutFilter,window.pin.showErrorMessage);
      noticeForm.classList.remove('notice__form--disabled');
    }
  };


})();