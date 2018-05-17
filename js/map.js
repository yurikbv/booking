'use strict';

(function () {

  var map = document.body.querySelector('.map');
  var myPin = map.querySelector('.map__pin--main');

  var foundActivePin = function(){
    map.querySelector('.map__pin--active').classList.remove('map__pin--active')
  };

  var foundNumberActivePin = function(){
    var mapPins = document.querySelectorAll('.map__pin');
    for(var i = 0;i < mapPins.length; i++) {
      if (mapPins[i].classList.contains('map__pin--active')){
        return --i
      }
    }
  };

  var removeCard = function () {
    map.removeChild(map.querySelector('.map__card.popup'))
  };

  var onEscPress = function (event) {
    window.util.isEscEvent(event,removeCard);
    document.removeEventListener('keydown',onEscPress);
  };

  var openPopup = function(target){
    if(target.classList.contains('map__pin--main')){
      return false;
    } else map.appendChild(window.card.renderCard(window.data.ads[foundNumberActivePin()]));
    var popupClose = document.querySelector('.popup__close');
    popupClose.addEventListener('click',removeCard);
    popupClose.addEventListener('keydown',function (evt) {
      window.util.isEnterEvent(evt,removeCard);
    });
    document.addEventListener('keydown',onEscPress)
  };

  map.addEventListener('click',function (evt) {
    var target = evt.target;
    if(target.closest('.map__pin')){
      if(map.querySelector('.map__pin--active')){
        foundActivePin();
      }
      target.closest('.map__pin').classList.add('map__pin--active');
      if(map.querySelector('.map__card.popup')) removeCard();
      openPopup(target.closest('.map__pin'));
    }
  });

  //  Move myself Pin
  myPin.addEventListener('mousedown',function (event) {
    event.preventDefault();
    var target = event.target.closest('.map__pin--main');
    var getCoords = function (element) {
      var box = element.getBoundingClientRect();
      return{
        left: box.left + pageXOffset,
        top: box.top + pageYOffset
      }
    };
    var myPinCoords = getCoords(target);
    var shiftX = event.pageX - myPinCoords.left;
    var shiftY = event.pageY - myPinCoords.top;

    var moveAt = function (event) {
      var left = event.pageX - shiftX;
      var top = event.pageY - shiftY;
      myPin.style.left = Math.max(map.getBoundingClientRect().left,left + myPin.offsetWidth/2 - 31.6) + 'px';
      myPin.style.top = Math.max(100,top + myPin.offsetHeight/2) + 'px';
      if(left + myPin.offsetWidth > map.getBoundingClientRect().right){
        myPin.style.left = map.getBoundingClientRect().right - myPin.offsetWidth + 'px';
      }
      if(top - myPin.offsetHeight/2 - 18 > 500) {
        myPin.style.top = 500 + myPin.offsetHeight + 18 + 'px'
      }
      document.body.querySelector('#address').value = 'x: ' + parseInt(myPin.getBoundingClientRect().left + pageXOffset)
          + ' y: ' + parseInt(myPin.getBoundingClientRect().top + myPin.offsetHeight/2 + 18 + pageYOffset)
    };
    
    var mouseMove = function (eventMove) {
      eventMove.preventDefault();
      moveAt(eventMove);
    };
    var mouseUp = function (eventUp) {
      eventUp.preventDefault();
      document.removeEventListener('mousemove',mouseMove);
      document.removeEventListener('mouseup',mouseUp);
    };

    moveAt(event);
    document.addEventListener('mousemove',mouseMove);
    document.addEventListener('mouseup',mouseUp);
  });
})();
