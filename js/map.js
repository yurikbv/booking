var getRandomNumber = function (max,min) {
  return Math.floor((min || 0) + Math.random() * max)
};
var getRandomFeatures = function () {
  var features = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
  features.length = getRandomNumber(features.length,1);
  return features;
};
var ads = [{
  author: {
    avatar: 'img/avatars/user01.png'
  },
  offer: {
    title: 'Большая уютная квартира',
    address: '{{location.x}}, {{location.y}}',
    price: getRandomNumber(1000000,1000),
    type: 'flat',
    rooms: getRandomNumber(5,1),
    guests: getRandomNumber(5),
    checkin: '12:00',
    checkout: '12:00',
    features: getRandomFeatures(),
    description: '',
    photos: []
  },
  location: {
    x: getRandomNumber(900,300),
    y: getRandomNumber(500,100)
  }
},{
  author: {
    avatar: 'img/avatars/user02.png'
  },
  offer: {
    title: 'Маленькая неуютная квартира',
    address: '{{location.x}}, {{location.y}}',
    price: getRandomNumber(1000000,1000),
    type: 'flat',
    rooms: getRandomNumber(5,1),
    guests: getRandomNumber(5),
    checkin: '13:00',
    checkout: '13:00',
    features: getRandomFeatures(),
    description: '',
    photos: []
  },
  location: {
    x: getRandomNumber(900,300),
    y: getRandomNumber(500,100)
  }
},{
  author: {
    avatar: 'img/avatars/user03.png'
  },
  offer: {
    title: 'Огромный прекрасный дворец',
    address: '{{location.x, {{location.y}}',
    price: getRandomNumber(1000000,1000),
    type: 'house',
    rooms: getRandomNumber(5,1),
    guests: getRandomNumber(5),
    checkin: '14:00',
    checkout: '14:00',
    features: getRandomFeatures(),
    description: '',
    photos: []
  },
  location: {
    x: getRandomNumber(900,300),
    y: getRandomNumber(500,100)
  }
},{
  author: {
    avatar: 'img/avatars/user04.png'
  },
  offer: {
    title: 'Маленький ужасный дворец',
    address: '{{location.x}}, {{location.y}}',
    price: getRandomNumber(1000000,1000),
    type: 'house',
    rooms: getRandomNumber(5,1),
    guests: getRandomNumber(5),
    checkin: '12:00',
    checkout: '12:00',
    features: getRandomFeatures(),
    description: '',
    photos: []
  },
  location: {
    x: getRandomNumber(900,300),
    y: getRandomNumber(500,100)
  }
},{
  author: {
    avatar: 'img/avatars/user05.png'
  },
  offer: {
    title: 'Красивый гостевой домик',
    address: '{{location.x}}, {{location.y}}',
    price: getRandomNumber(1000000,1000),
    type: 'house',
    rooms: getRandomNumber(5,1),
    guests: getRandomNumber(5),
    checkin: '14:00',
    checkout: '14:00',
    features: getRandomFeatures(),
    description: '',
    photos: []
  },
  location: {
    x: getRandomNumber(900,300),
    y: getRandomNumber(500,100)
  }
},{
  author: {
    avatar: 'img/avatars/user06.png'
  },
  offer: {
    title: 'Некрасивый негостеприимный домик',
    address: '{{location.x}}, {{location.y}}',
    price: getRandomNumber(1000000,1000),
    type: 'house',
    rooms: getRandomNumber(5,1),
    guests: getRandomNumber(5),
    checkin: '13:00',
    checkout: '13:00',
    features: getRandomFeatures(),
    description: '',
    photos: []
  },
  location: {
    x: getRandomNumber(900,300),
    y: getRandomNumber(500,100)
  }
},{
  author: {
    avatar: 'img/avatars/user07.png'
  },
  offer: {
    title: 'Уютное бунгало далеко от моря',
    address: '{{location.x}}, {{location.y}}',
    price: getRandomNumber(1000000,1000),
    type: 'bungalo',
    rooms: getRandomNumber(5,1),
    guests: getRandomNumber(5,1),
    checkin: '12:00',
    checkout: '12:00',
    features: getRandomFeatures(),
    description: '',
    photos: []
  },
  location: {
    x: getRandomNumber(900,300),
    y: getRandomNumber(500,130)
  }
},{
  author: {
    avatar: 'img/avatars/user08.png'
  },
  offer: {
    title: 'Неуютное бунгало по колено в воде',
    address: '{{location.x}}, {{location.y}}',
    price: getRandomNumber(1000000,1000),
    type: 'bungalo',
    rooms: getRandomNumber(5,1),
    guests: getRandomNumber(5),
    checkin: '12:00',
    checkout: '12:00',
    features: getRandomFeatures(),
    description: '',
    photos: []
  },
  location: {
    x: getRandomNumber(900,300),
    y: getRandomNumber(500,100)
  }
}];

var map = document.body.querySelector('.map');
var mapPins = map.querySelector('.map__pins');
var templatePins = document.body.querySelector('template').content.querySelector('.map__pin');
var templateCards = document.body.querySelector('template').content.querySelector('.map__card');
var fragmentPins = document.createDocumentFragment();
var fragmentCards = document.createDocumentFragment();

var randomPin = function(pin){
  var clone = templatePins.cloneNode(true);
  clone.style.left = pin.location.x - 20 + 'px';
  clone.style.top = pin.location.y - 29 + 'px';
  clone.querySelector('img').src = pin.author.avatar;
  return clone;
};
var randomCard = function (obj) {
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
  clone.querySelector('p > small').textContent = obj.offer.address;
  clone.querySelector('.popup__price').innerHTML = obj.offer.price + '&#x20bd;/ночь';
  clone.querySelector('h4').textContent = obj.offer.type;
  clone.children[6].textContent = obj.offer.rooms + ' для ' + obj.offer.guests + ' гостей';
  clone.children[7].textContent = 'Заезд после ' + obj.offer.checkin + ', выезд до ' + obj.offer.checkout;
  clone.children[9].textContent = obj.offer.description;
  features.innerHTML = getCountFeatures(features,obj.offer.features.length);
  return clone;
};
var randomPins = function(){
  for(var i = 0;i < ads.length;i++){
    fragmentPins.appendChild(randomPin(ads[i]))
  }
  return fragmentPins;
};
var randomCards = function(){
  for(var i = 0;i < ads.length;i++){
    fragmentCards.appendChild(randomCard(ads[i]))
  }
  return fragmentCards;
};
map.classList.remove('map--faded');
mapPins.appendChild(randomPins());
mapPins.appendChild(randomCards());

