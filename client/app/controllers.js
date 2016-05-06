function topBarCtrl($scope) {
  $scope.url = 'haven moore'

  $scope.urlify = function () {
    $scope.url = 'havenm.org'
  }

  $scope.nameify = function () {
    $scope.url = 'haven moore'
  }

}

angular.module('havenm')
  .controller('topBarCtrl', topBarCtrl)