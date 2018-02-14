'use strict';

function getRandomNumbers(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomLength(arr) {
  arr.length = getRandomNumbers(1,arr.length);
  return arr;
}
var nearItems = [{
  author: { avatar: 'img/avatars/user01.png'},
  offer: {
    title: "Большая уютная квартира",
    address: "{{location.x}}, {{location.y}}",
    price: getRandomNumbers(1000,1000000),
    type: 'flat',
    rooms: getRandomNumbers(1,5),
    guests: getRandomNumbers(1,4),
    checkin: '12:00',
    checkout: '12:00',
    features: getRandomLength(["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"]),
    description: 'Великолепная квартира-студия в центре Токио. Подходит как туристам, так и бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.',
    photos: []
  },
  location: {
    x: getRandomNumbers(300,900),
    y: getRandomNumbers(100,500)
  }
},{
  author: { avatar: 'img/avatars/user02.png'},
  offer: {
    title: "Маленькая неуютная квартира",
    address: "{location.x}, {location.y}",
    price: getRandomNumbers(1000,1000000),
    type: 'flat',
    rooms: getRandomNumbers(1,5),
    guests: getRandomNumbers(1,4),
    checkin: '13:00',
    checkout: '13:00',
    features: getRandomLength(["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"]),
    description: '',
    photos: []
  },
  location: {
    x: getRandomNumbers(300,900),
    y: getRandomNumbers(100,500)
  }
},{
  author: { avatar: 'img/avatars/user03.png'},
  offer: {
    title: "Огромный прекрасный дворец",
    address: "{location.x}, {location.y}",
    price: getRandomNumbers(1000,1000000),
    type: 'bungalo',
    rooms: getRandomNumbers(1,5),
    guests: getRandomNumbers(1,4),
    checkin: '14:00',
    checkout: '14:00',
    features: getRandomLength(["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"]),
    description: '',
    photos: []
  },
  location: {
    x: getRandomNumbers(300,900),
    y: getRandomNumbers(100,500)
  }
},{
  author: { avatar: 'img/avatars/user04.png'},
  offer: {
    title: "Маленький ужасный дворец",
    address: "{location.x}, {location.y}",
    price: getRandomNumbers(1000,1000000),
    type: 'house',
    rooms: getRandomNumbers(1,5),
    guests: getRandomNumbers(1,4),
    checkin: '12:00',
    checkout: '14:00',
    features: getRandomLength(["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"]),
    description: '',
    photos: []
  },
  location: {
    x: getRandomNumbers(300,900),
    y: getRandomNumbers(100,500)
  }
},{
  author: { avatar: 'img/avatars/user05.png'},
  offer: {
    title: "Красивый гостевой домик",
    address: "{location.x}, {location.y}",
    price: getRandomNumbers(1000,1000000),
    type: 'house',
    rooms: getRandomNumbers(1,5),
    guests: getRandomNumbers(1,4),
    checkin: '14:00',
    checkout: '13:00',
    features: getRandomLength(["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"]),
    description: '',
    photos: []
  },
  location: {
    x: getRandomNumbers(300,900),
    y: getRandomNumbers(100,500)
  }
},{
  author: { avatar: 'img/avatars/user06.png'},
  offer: {
    title: "Некрасивый негостеприимный домик",
    address: "{location.x}, {location.y}",
    price: getRandomNumbers(1000,1000000),
    type: 'house',
    rooms: getRandomNumbers(1,5),
    guests: getRandomNumbers(1,4),
    checkin: '12:00',
    checkout: '12:00',
    features: getRandomLength(["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"]),
    description: '',
    photos: []
  },
  location: {
    x: getRandomNumbers(300,900),
    y: getRandomNumbers(100,500)
  }
},{
  author: { avatar: 'img/avatars/user07.png'},
  offer: {
    title: "Уютное бунгало далеко от моря",
    address: "{location.x}, {location.y}",
    price: getRandomNumbers(1000,1000000),
    type: 'bungalo',
    rooms: getRandomNumbers(1,5),
    guests: getRandomNumbers(1,4),
    checkin: '12:00',
    checkout: '14:00',
    features: getRandomLength(["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"]),
    description: '',
    photos: []
  },
  location: {
    x: getRandomNumbers(300,900),
    y: getRandomNumbers(100,500)
  }
},{
  author: { avatar: 'img/avatars/user08.png'},
  offer: {
    title: "Неуютное бунгало по колено в воде",
    address: "{location.x}, {location.y}",
    price: getRandomNumbers(1000,1000000),
    type: 'bungalo',
    rooms: getRandomNumbers(1,5),
    guests: getRandomNumbers(1,4),
    checkin: '13:00',
    checkout: '13:00',
    features: getRandomLength(["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"]),
    description: '',
    photos: []
  },
  location: {
    x: getRandomNumbers(300,900),
    y: getRandomNumbers(100,500)
  }
}
];
var map = document.querySelector('.map'); //Карта
var mapCards = document.querySelector('.map__cards');
var mapPins = map.querySelector('.map__pins'); //Пины на карте
var mapTemplate = document.querySelector('template').content; //Шаблоны пинов

function renderHouses(houses) {
  var houseElement = mapTemplate.querySelector('.map__pin').cloneNode(true);
  houseElement.style.left = houses.location.x + houseElement.getAttribute('width') + 'px';
  houseElement.style.top = houses.location.y + houseElement.getAttribute('height') + 'px';  //Заполняем метки по очереди
  houseElement.querySelector('img').setAttribute('src', houses.author.avatar);
  return houseElement;
}
var fragment = document.createDocumentFragment();
for (var i = 0; i < nearItems.length; i++){
  fragment.appendChild(renderHouses(nearItems[i]));//Добавляем заполненные метки в fragment
}
var mapTemplateCard = document.querySelector('template').content.querySelector('.map__card');// Шаблон Визитки
var featureBlock = mapTemplateCard.querySelector('.popup__features');// Особенности

function renderOtherHouses(houses) {    //Заполняем Card
  mapTemplateCard = mapTemplateCard.cloneNode(true);
  mapTemplateCard.querySelector('h3').textContent = houses.offer.title;
  mapTemplateCard.querySelector('small').textContent = houses.location.x + ' ' + houses.location.y + '  Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3';
  mapTemplateCard.querySelector('.popup__price').innerHTML = houses.offer.price + '&#x20bd;/ночь';
  mapTemplateCard.querySelector('h4').textContent = (houses.offer.type === 'flat') ? 'Квартира' : (houses.offer.type === 'house') ? 'Дом' : 'Бунгало';
  mapTemplateCard.children[6].textContent = houses.offer.rooms + ' комнаты для ' + houses.offer.guests + ' гостей';
  mapTemplateCard.children[7].textContent = 'Заезд после ' + houses.offer.checkin  + ' выезд до ' + houses.offer.checkout;
  for (i = featureBlock.children.length; i - houses.offer.features.length > 0 ; i--){
    featureBlock.removeChild(featureBlock.children[i - 1])
  }
  mapTemplateCard.children[9].textContent = houses.offer.description;
  mapTemplateCard.querySelector('.popup__avatar').setAttribute('src', houses.author.avatar);
  mapTemplateCard.setAttribute('style','display:none');
  return mapTemplateCard;
}
var naticeForm = document.querySelector('.notice__form');// Форма
var fields = naticeForm.querySelectorAll('fieldset'); //Поля форм
function addRemoveDisabledForm(fields) {   //Делаем поля fields формы - disabled или no disabled
  for(i = 0;i < fields.length; i++){
    if(fields[i].hasAttribute('disabled')){
      fields[i].removeAttribute('disabled','disabled');
    } else fields[i].setAttribute('disabled','disabled');
  }
}
var myPin = map.querySelector('.map__pin--main'); //Мой пин
myPin.addEventListener('mouseup', function () {
  map.classList.remove('map--faded');        //При нажатии моего Pin снимаем faded
  mapPins.appendChild(fragment);             // Добавляем fragment с пинами на карту
  naticeForm.classList.remove('notice__form--disabled'); //Включаем форму
  addRemoveDisabledForm(fields);                          //Убираем disabled
});
addRemoveDisabledForm(fields); //  Делаем disabled fields в форме

function removePinActive() {
  var otherPins = map.querySelectorAll('.map__pin');
  for(var i = 0;i < otherPins.length; i++){
    if(otherPins[i].classList.contains('map__pin--active')){ //Убираем старые активные Pin перед
      otherPins[i].classList.remove('map__pin--active')      //установкой нового
    }
  }
}
var fragmentCard = document.createDocumentFragment(); //Фрагмент Card
for(var j = 0;j < nearItems.length; j++) {
  fragmentCard.appendChild(renderOtherHouses(nearItems[j])); //Добавляем заполненные Card в fragment Card
}
mapCards.appendChild(fragmentCard);  //Добавляем fragment card на карту

var mapCard = map.querySelectorAll('.map__card'); //Попапы объявлений
function openCart(target) {
       //если событе на картинке
    removePinActive();
    target.parentElement.classList.add('map__pin--active'); //делаем её активной
    removeCardActive();
    mapCard[searchActive(active)].classList.add('map__card--active'); //и её Card делаем активной и выводим на экран
    document.querySelector('.map .map__card.map__card--active').setAttribute('style','display:block')
}
function searchActive(active) {
  var otherPins = map.querySelectorAll('.map__pin');
  for(var i = 0; i < otherPins.length;i++){
    if(otherPins[i].classList.contains('map__pin--active')){  //Ищем позицию Pin Active в коллекции
      active = i;
      return active-1;
    }
  }
}
function removeCardActive() {
  for(var i = 0;i < mapCard.length;i++){
    if(mapCard[i].classList.contains('map__card--active')){    //Убираем старые активные Card перед
      mapCard[i].classList.remove('map__card--active');        //установкой нового
      mapCard[i].setAttribute('style','display:none');          //И старые сдвигаем в сторону
    }
  }
}
var active,
    ENTER_KEY = 13,
    ESC__KEY = 27;
mapPins.addEventListener('click',function (event) {  //Ловим событие на Pins
  var target = event.target;
  if(target.nodeName === 'IMG'){
    openCart(target);
  }
});
mapPins.addEventListener('keydown',function (event) {  //Ловим событие на Pins
  var target = event.target;
  if(event.keyCode === ENTER_KEY){
    removePinActive();
    target.classList.add('map__pin--active'); //делаем её активной
    removeCardActive();
    mapCard[searchActive(active)].classList.add('map__card--active'); //и её Card делаем активной и выводим на экран
    document.querySelector('.map .map__card.map__card--active').setAttribute('style','display:block')
  }
});

mapCards.addEventListener('click',function (e) {
  var target = e.target;
  if(target.className === 'popup__close'){
    removeCardActive();
    removePinActive();
  }
});
mapCards.addEventListener('keydown',function (e) {
  var target = e.target;
  if(target.className === 'popup__close' && e.keyCode === ENTER_KEY){
    removeCardActive();
    removePinActive();
  }
});
map.addEventListener('keydown',function (e) {
  if(e.keyCode === ESC__KEY){
    removeCardActive();
    removePinActive();
  }
});






