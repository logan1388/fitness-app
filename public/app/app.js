angular.module('app', ['ngResource']);

angular.module('app').controller('mainCtrl', function($scope, $resource) {
    $scope.bodyParts  = $resource('/api/bodyparts').query();
});