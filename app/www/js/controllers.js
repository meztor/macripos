angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($http, $scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.chats = [];
  $http.$.post('http://localhost/macrijw/sistema/index.php/tutorial', {'csrf': '35'}, function(data, textStatus, xhr) {
    $scope.chats = data;
  });
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
.controller('ProductosCtrl', ['$http','$scope', function($http, $scope){
  $scope.productos = [];
  $http.get('http://macrijw.hol.es/sistema/index.php/producto')
    .success(function(response){
      $scope.productos = response;
    })
    .error(function(response){
      alert('error' + response);
    });

  $scope.refrescar = function(){
     $http.get('http://macrijw.hol.es/sistema/index.php/producto')
     .success(function(productos) {
       $scope.productos = productos;
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  }
  
}])

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
