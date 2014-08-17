

  var freddieApp = angular.module("freddieApp", []);

  freddieApp.controller('ChatCtrl', function($scope, $http) {

    this.test = 'moo';

    $http.get('api/chat.json').success(function(data) {

      $scope.messages = data;
      
    });
    

  });

