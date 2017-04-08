angular.module('starter.services', [])

.factory('Chats', function() {
  var chats =  angular.fromJson(window.localStorage['chats'] || '[]');

  function persist(){
    window.localStorage['chats'] = angular.toJson(chats);
  }

  if (chats.length == 0) {
    chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'img/ben.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'img/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'img/perry.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'img/mike.png'
    }];  
    
  }else{
    chats.push({
      id:  new Date().getTime().toString(),
      name: 'Macri JW',
      lastText: 'Hola que tal',
      face: 'img/ionic.png'
    })
  }
  persist();
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
