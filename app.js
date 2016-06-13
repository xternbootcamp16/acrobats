(function() {
  angular.module('acrobatApp', [])
    .controller('AcrobatController', function($scope) {
      $scope.acrobats = [
        { name: 'Matheu', act: 'disappearing' },
        { name: 'Jenn', act: 'showing up' },
        { name: 'Josh', act: 'flight'}
      ];
      $scope.acrobat = { name: '', act: '', errors: [] };
      $scope.addAcrobat = function() {
        if ($scope.validateAcrobat()) {
          $scope.acrobats.push($scope.acrobat);
          $scope.acrobat = { name: '', act: '', errors: [] }
        }
      }
      $scope.removeLastPerson = function() {
        $scope.acrobats.pop();
      }
      $scope.editAcrobat = function(acrobat) {
        $scope.editing = true;
        $scope.acrobat = acrobat;
      }
      $scope.updateAcrobat = function() {
        $scope.editing = false;
        $scope.acrobat = { name: '', act: '', errors: [] };
      }
      $scope.removeAcrobat = function(index) {
        $scope.acrobats.splice(index, 1);
      }
      $scope.validateAcrobat = function() {
        if ($scope.acrobat.name.trim() === '') {
          $scope.acrobat.errors.push('Name is required.');
          return false;
        }
        return true;
      }
    });
  })();
