'use strict';

(function () {

  var templateCards = document.body.querySelector('template').content.querySelector('.map__card');
  var map = document.body.querySelector('.map');

  var foundNumberActivePin = function(){
    var mapPins = document.querySelectorAll('.map__pin');
    for(var i = 0;i < mapPins.length; i++) {
      if (mapPins[i].classList.contains('map__pin--active')){
        return --i
      }
    }
  };

  var renderFeatures = function(features,place){
    for (var i = 0; i < features.length; i++) {
      var li = document.createElement('li');
      li.className = 'feature  feature--' + features[i];
      place.appendChild(li)
    }
  };

  window.card = {
    renderCard: function (array) {
      var obj = array[foundNumberActivePin()];
      var clone = templateCards.cloneNode(true);
      var features = clone.querySelector('.popup__features');
      clone.querySelector('.popup__avatar').src = obj.author.avatar;
      clone.querySelector('h3').textContent = obj.offer.title;
      clone.querySelector('p > small').textContent = obj.offer.address;
      clone.querySelector('.popup__price').innerHTML = obj.offer.price + '&#x20bd;/ночь';
      clone.querySelector('h4').textContent = obj.offer.type;
      clone.children[6].textContent = obj.offer.rooms + ' для ' + obj.offer.guests + ' гостей';
      clone.children[7].textContent = 'Заезд после ' + obj.offer.checkin + ', выезд до ' + obj.offer.checkout;
      clone.children[9].textContent = obj.offer.description;
      features.innerHTML = '';
      renderFeatures(obj.offer.features,features);
      map.appendChild(clone);

      var popupClose = document.querySelector('.map__card .popup__close');
      popupClose.addEventListener('click',window.removeCard);
      popupClose.addEventListener('keydown',function (evt) {
        window.util.isEnterEvent(evt,window.removeCard);
      });
    }
  };

})();