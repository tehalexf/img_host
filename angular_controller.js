function MyCtrl($scope) {
  $scope.title = 'PokeProfile';
  $scope.creator = 'Miguel Acevedo';
  
            $scope.NameChange = function () {
              $scope.creator = "Hello " + $scope.name;
          };
  
}
