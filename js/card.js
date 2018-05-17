'use strict';

(function () {

  var templateCards = document.body.querySelector('template').content.querySelector('.map__card');

  window.card = {
    renderCard: function (obj) {
      var getCountFeatures = function (features,length) {
        for(var i = features.children.length;i > length; i--){
          features.removeChild(features.lastElementChild)
        }
        return features.innerHTML;
      };
      var clone = templateCards.cloneNode(true);
      var features = clone.querySelector('.popup__features');
      clone.querySelector('.popup__avatar').src = obj.author.avatar;
      clone.querySelector('h3').textContent = obj.offer.title;
      clone.querySelector('p > small').textContent = obj.location.x + ' ' + obj.location.y;
      clone.querySelector('.popup__price').innerHTML = obj.offer.price + '&#x20bd;/ночь';
      clone.querySelector('h4').textContent = obj.offer.type;
      clone.children[6].textContent = obj.offer.rooms + ' для ' + obj.offer.guests + ' гостей';
      clone.children[7].textContent = 'Заезд после ' + obj.offer.checkin + ', выезд до ' + obj.offer.checkout;
      clone.children[9].textContent = obj.offer.description;
      features.innerHTML = getCountFeatures(features,obj.offer.features.length);
      return clone;
    },
    renderMyCard: function (obj) {

    }
  };

})();