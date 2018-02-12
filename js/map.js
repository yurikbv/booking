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
var map = document.querySelector('.map');
var mapPins = map.querySelector('.map__pins');
map.classList.remove('map--faded');
var mapTemplate = document.querySelector('template').content;
var mapTemplateCard = document.querySelector('template').content.querySelector('.map__card').cloneNode(true);

function renderHouses(houses) {
  var houseElement = mapTemplate.cloneNode(true);
  houseElement.querySelector('.map__pin').style.left = houses.location.x + houseElement.querySelector('.map__pin').getAttribute('width') + 'px';
  houseElement.querySelector('.map__pin').style.top = houses.location.y + houseElement.querySelector('.map__pin').getAttribute('height') + 'px';
  houseElement.querySelector('.map__pin').querySelector('img').setAttribute('src', houses.author.avatar);
  return houseElement;
}
var fragment = document.createDocumentFragment();
for (var i = 0; i < nearItems.length; i++){
  fragment.appendChild(renderHouses(nearItems[i]));
}
mapPins.appendChild(fragment);
var firtsItems = nearItems[0];
var featureBlock = mapTemplateCard.querySelector('.popup__features');
mapTemplateCard.querySelector('h3').textContent = firtsItems.offer.title;
mapTemplateCard.querySelector('small').textContent = firtsItems.location.x + ' ' + firtsItems.location.y + '  Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3';
mapTemplateCard.querySelector('.popup__price').innerHTML = firtsItems.offer.price + '&#x20bd;/ночь';
mapTemplateCard.querySelector('h4').textContent = (firtsItems.offer.type === 'flat') ? 'Квартира' : (firtsItems.offer.type === 'house') ? 'Дом' : 'Бунгало';
mapTemplateCard.children[6].textContent = firtsItems.offer.rooms + ' комнаты для ' + firtsItems.offer.guests + ' гостей';
mapTemplateCard.children[7].textContent = 'Заезд после ' + firtsItems.offer.checkin  + ' выезд до ' + firtsItems.offer.checkout;
for (i = featureBlock.children.length; i - firtsItems.offer.features.length > 0 ; i--){
  featureBlock.removeChild(featureBlock.children[i - 1])
}
mapTemplateCard.children[9].textContent = firtsItems.offer.description;
mapTemplateCard.querySelector('.popup__avatar').setAttribute('src', firtsItems.author.avatar);
map.appendChild(mapTemplateCard);

