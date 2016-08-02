angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
    $scope.bodyParts = [{
        title: 'Chest',
        description: 'Chest'
    }, {
        title: 'Biceps',
        description: 'Biceps'
    }, {
        title: 'Triceps',
        description: 'Triceps'
    }]

});