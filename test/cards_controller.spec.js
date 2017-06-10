describe('CardsController', function() {
    var $rootScope, $scope, controller;

    beforeEach(function () {
        module('memoryGame');

        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')('CardsController', {$scope: $scope});
        })
    });

    describe('cards', function () {
        it('should empty cards', function () {
            expect($scope.cards.length).toBe(0);
        });
    });
});