angular.module('acrobatApp', [])
.controller('AcrobatController', function($scope) {
  $scope.editing = false;
  $scope.acrobats = [
    { name: 'Jordan', act: 'trapeze' },
    { name: 'Katelyn', act: 'high wire' }
  ];
  $scope.acrobat = { name: '', act: '', errors: [] };
  $scope.addAcrobat = function() {
    if ($scope.acrobat.name.trim() !== '') {
      $scope.formError = false;
      $scope.acrobats.push($scope.acrobat);
      $scope.acrobat = { name: '', act: '', errors: [] };
    }
    else {
      $scope.acrobat.errors.push('Name is required.');
    }
  }
  $scope.removeLastAcrobat = function() {
    $scope.acrobats.pop();
  }
  $scope.editAcrobat = function(acrobat) {
    $scope.editing = true;
    $scope.acrobat = acrobat;
  }
  $scope.updateAcrobat = function() {
    $scope.acrobat = {};
    $scope.editing = false;
  }
  $scope.removeAcrobat = function(index) {
    $scope.acrobats.splice(index, 1);
  }
});
