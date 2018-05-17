'use strict';

(function () {
  var getRandomFeatures = function () {
    var features = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
    features.length = window.getRandomNumber(features.length,1);
    return features;
  };

  window.data = {
    ads : [{
      author: {
        avatar: 'img/avatars/user01.png'
      },
      offer: {
        title: 'Большая уютная квартира',
        address: '{{location.x}}, {{location.y}}',
        price: window.getRandomNumber(1000000,1000),
        type: 'flat',
        rooms: window.getRandomNumber(5,1),
        guests: window.getRandomNumber(5),
        checkin: '12:00',
        checkout: '12:00',
        features: getRandomFeatures(),
        description: '',
        photos: []
      },
      location: {
        x: window.getRandomNumber(900,300),
        y: window.getRandomNumber(500,100)
      }
    },{
      author: {
        avatar: 'img/avatars/user02.png'
      },
      offer: {
        title: 'Маленькая неуютная квартира',
        address: '{{location.x}}, {{location.y}}',
        price: window.getRandomNumber(1000000,1000),
        type: 'flat',
        rooms: window.getRandomNumber(5,1),
        guests: window.getRandomNumber(5),
        checkin: '13:00',
        checkout: '13:00',
        features: getRandomFeatures(),
        description: '',
        photos: []
      },
      location: {
        x: window.getRandomNumber(900,300),
        y: window.getRandomNumber(500,100)
      }
    },{
      author: {
        avatar: 'img/avatars/user03.png'
      },
      offer: {
        title: 'Огромный прекрасный дворец',
        address: '{{location.x, {{location.y}}',
        price: window.getRandomNumber(1000000,1000),
        type: 'house',
        rooms: window.getRandomNumber(5,1),
        guests: window.getRandomNumber(5),
        checkin: '14:00',
        checkout: '14:00',
        features: getRandomFeatures(),
        description: '',
        photos: []
      },
      location: {
        x: window.getRandomNumber(900,300),
        y: window.getRandomNumber(500,100)
      }
    },{
      author: {
        avatar: 'img/avatars/user04.png'
      },
      offer: {
        title: 'Маленький ужасный дворец',
        address: '{{location.x}}, {{location.y}}',
        price: window.getRandomNumber(1000000,1000),
        type: 'house',
        rooms: window.getRandomNumber(5,1),
        guests: window.getRandomNumber(5),
        checkin: '12:00',
        checkout: '12:00',
        features: getRandomFeatures(),
        description: '',
        photos: []
      },
      location: {
        x: window.getRandomNumber(900,300),
        y: window.getRandomNumber(500,100)
      }
    },{
      author: {
        avatar: 'img/avatars/user05.png'
      },
      offer: {
        title: 'Красивый гостевой домик',
        address: '{{location.x}}, {{location.y}}',
        price: window.getRandomNumber(1000000,1000),
        type: 'house',
        rooms: window.getRandomNumber(5,1),
        guests: window.getRandomNumber(5),
        checkin: '14:00',
        checkout: '14:00',
        features: getRandomFeatures(),
        description: '',
        photos: []
      },
      location: {
        x: window.getRandomNumber(900,300),
        y: window.getRandomNumber(500,100)
      }
    },{
      author: {
        avatar: 'img/avatars/user06.png'
      },
      offer: {
        title: 'Некрасивый негостеприимный домик',
        address: '{{location.x}}, {{location.y}}',
        price: window.getRandomNumber(1000000,1000),
        type: 'house',
        rooms: window.getRandomNumber(5,1),
        guests: window.getRandomNumber(5),
        checkin: '13:00',
        checkout: '13:00',
        features: getRandomFeatures(),
        description: '',
        photos: []
      },
      location: {
        x: window.getRandomNumber(900,300),
        y: window.getRandomNumber(500,100)
      }
    },{
      author: {
        avatar: 'img/avatars/user07.png'
      },
      offer: {
        title: 'Уютное бунгало далеко от моря',
        address: '{{location.x}}, {{location.y}}',
        price: window.getRandomNumber(1000000,1000),
        type: 'bungalo',
        rooms: window.getRandomNumber(5,1),
        guests: window.getRandomNumber(5,1),
        checkin: '12:00',
        checkout: '12:00',
        features: getRandomFeatures(),
        description: '',
        photos: []
      },
      location: {
        x: window.getRandomNumber(900,300),
        y: window.getRandomNumber(500,130)
      }
    },{
      author: {
        avatar: 'img/avatars/user08.png'
      },
      offer: {
        title: 'Неуютное бунгало по колено в воде',
        address: '{{location.x}}, {{location.y}}',
        price: window.getRandomNumber(1000000,1000),
        type: 'bungalo',
        rooms: window.getRandomNumber(5,1),
        guests: window.getRandomNumber(5),
        checkin: '12:00',
        checkout: '12:00',
        features: getRandomFeatures(),
        description: '',
        photos: []
      },
      location: {
        x: window.getRandomNumber(900,300),
        y: window.getRandomNumber(500,100)
      }
    }]
  }
})();