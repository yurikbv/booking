'use strict';

(function () {

  var form = document.querySelector('.notice__form');
  var timeIn = form.querySelector('#timein');
  var timeOut = form.querySelector('#timeout');
  var type = form.querySelector('#type');
  var price = form.querySelector('#price');
  var roomNumber = form.querySelector('#room_number');
  var capacity = form.querySelector('#capacity');
  var features = form.querySelectorAll('.form__element.features input');

  timeIn.addEventListener('change',function (event) {
    timeOut.selectedIndex = event.target.selectedIndex;
  });
  timeOut.addEventListener('change',function (event) {
    timeIn.selectedIndex = event.target.selectedIndex;
  });

  var defaultType = function(){
    if(type.value === 'flat' ) {
      price.setAttribute('min','1000')
    } else if (type.value === 'bungalo'){
      price.setAttribute('min','0')
    } else if (type.value === 'house'){
      price.setAttribute('min','5000')
    } else if(type.value === 'palace'){
      price.setAttribute('min','10000')
    } else price.setAttribute('min','')
  };

  var defaultCapacity = function(){
    if(roomNumber.value === '1'){
      capacity.options[2].selected = true;
      capacity.options[0].disabled = capacity.options[1].disabled = capacity.options[3].disabled = true
    } else if(roomNumber.value === '2'){
      capacity.options[1].selected = true;
      capacity.options[0].disabled  = capacity.options[3].disabled = true;
      capacity.options[2].disabled = capacity.options[1].disabled = false
    } else if(roomNumber.value === '3') {
      capacity.options[0].selected = true;
      capacity.options[3].disabled = true;
      capacity.options[0].disabled = capacity.options[1].disabled = capacity.options[2].disabled = false;
    } else if(roomNumber.value === '100'){
      capacity.options[3].selected = true;
      capacity.options[0].disabled = capacity.options[1].disabled = capacity.options[2].disabled = true;
      capacity.options[3].disabled = false;
    }
  };

  type.addEventListener('change',function () {
    defaultType()
  });

  roomNumber.addEventListener('change',function () {
    defaultCapacity();
  });

  defaultType();
  defaultCapacity();

  var defaultForm = function(){
    form.querySelector('#title').value = '';
    form.querySelector('#address').value = '';
    form.querySelector('#description').value = '';
    type.selectedIndex = 0;
    timeIn.selectedIndex = 0;
    timeOut.selectedIndex = 0;
    roomNumber.selectedIndex = 0;
    capacity.selectedIndex = 2;
    price.value = '';
    for(var i = 0; i < features.length; i++){
        features[i].checked = false
    }
  };

  form.addEventListener('submit',function (event) {
    window.backend.save(new FormData(form),defaultForm,window.pin.showErrorMessage);
    event.preventDefault();
  })
})();