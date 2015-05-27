app.controller("usersController", ['$scope', 'userDetails', function($scope, userDetails){ 
  userDetails.getUsers(function(response, error) {
      $scope.allusers = response.items;
      console.log($scope.allusers);       
  }, function(error){});
}]);