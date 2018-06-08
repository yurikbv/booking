'use strict';

(function () {

  var map = document.body.querySelector('.map');
  var myPin = map.querySelector('.map__pin--main');

  var firstShow = true;

  var foundActivePin = function(){
    map.querySelector('.map__pin--active').classList.remove('map__pin--active')
  };


  window.removeCard = function () {
    map.removeChild(map.querySelector('.map__card.popup'))
  };

  var onEscPress = function (event) {
    window.util.isEscEvent(event,window.removeCard);
    document.removeEventListener('keydown',onEscPress);
  };

  var openPopup = function(target){
    if(target.classList.contains('map__pin--main')){
      return false;
    } else {
      window.card.renderCard(window.newData || window.dataPins);
    }
    document.addEventListener('keydown',onEscPress)
  };

  map.addEventListener('click',function (evt) {
    var target = evt.target;
    if(target.closest('.map__pin')){
      if(map.querySelector('.map__pin--active')){
        foundActivePin();
      }
      target.closest('.map__pin').classList.add('map__pin--active');
      if(map.querySelector('.map__card.popup')) window.removeCard();
      openPopup(target.closest('.map__pin'));
    }
  });

  //  Move myself Pin
  myPin.addEventListener('mousedown',function (event) {
    event.preventDefault();
    var startCoords = {
      x: event.clientX,
      y: event.clientY
    };

    var onMouseMove = function(evtMove){
      var shift = {
        x: startCoords.x - evtMove.clientX,
        y: startCoords.y - evtMove.clientY
      };
      startCoords = {
        x: evtMove.clientX,
        y: evtMove.clientY
      };
      myPin.style.top = Math.max(100,myPin.offsetTop - shift.y )+ 'px';
      myPin.style.left = Math.max(myPin.offsetWidth/2,myPin.offsetLeft - shift.x) + 'px';
      if(myPin.offsetLeft > map.offsetWidth - myPin.offsetWidth/2) {
        myPin.style.left = map.offsetWidth - myPin.offsetWidth/2 + 'px'
      }
      if(myPin.offsetTop > 600 ) {
        myPin.style.top = 600 + 'px'
      }
      document.body.querySelector('#address').value = 'x: ' + myPin.offsetLeft + ' y: ' + myPin.offsetTop;
    };

    var onMouseUp = function(){
      if(firstShow) {
        window.pin.showPins();
        firstShow = false;
      }
      document.removeEventListener('mousemove',onMouseMove);
      document.removeEventListener('mouseup',onMouseUp);
    };

    document.addEventListener('mousemove',onMouseMove);
    document.addEventListener('mouseup',onMouseUp);
  });
})();
