angular.module('memoryApp', [])
    .controller('CardsController', function($scope) {
        $scope.TurnedCards = [];
        $scope.cards = [
            {hit: false, id: 1, show: false, image: 'bulbasaur.png'},
            {hit: false, id: 2, show: false, image: 'butterfree.png'},
            {hit: false, id: 3, show: false, image: 'quirtle.png'},
            {hit: false, id: 4, show: false, image: 'charmander.png'},
            {hit: false, id: 5, show: false, image: 'eevee.png'},
            {hit: false, id: 6, show: false, image: 'haunter.png'},
            {hit: false, id: 7, show: false, image: 'horsea.png'},
            {hit: false, id: 8, show: false, image: 'meowth.png'},
            {hit: false, id: 9, show: false, image: 'nidorina.png'},
            {hit: false, id: 10, show: false, image: 'pidgey.png'},
            {hit: false, id: 11, show: false, image: 'pikachu.png'},
            {hit: false, id: 12, show: false, image: 'sandshrew.png'},
            {hit: false, id: 13, show: false, image: 'tauros.png'},
            {hit: false, id: 14, show: false, image: 'togepi.png'},
            {hit: false, id: 15, show: false, image: 'vulpix.png'},
            {hit: false, id: 16, show: false, image: 'lugia.png'},
            {hit: false, id: 1, show: false, image: 'bulbasaur.png'},
            {hit: false, id: 2, show: false, image: 'butterfree.png'},
            {hit: false, id: 3, show: false, image: 'quirtle.png'},
            {hit: false, id: 4, show: false, image: 'charmander.png'},
            {hit: false, id: 5, show: false, image: 'eevee.png'},
            {hit: false, id: 6, show: false, image: 'haunter.png'},
            {hit: false, id: 7, show: false, image: 'horsea.png'},
            {hit: false, id: 8, show: false, image: 'meowth.png'},
            {hit: false, id: 9, show: false, image: 'nidorina.png'},
            {hit: false, id: 10, show: false, image: 'pidgey.png'},
            {hit: false, id: 11, show: false, image: 'pikachu.png'},
            {hit: false, id: 12, show: false, image: 'sandshrew.png'},
            {hit: false, id: 13, show: false, image: 'tauros.png'},
            {hit: false, id: 14, show: false, image: 'togepi.png'},
            {hit: false, id: 15, show: false, image: 'vulpix.png'},
            {hit: false, id: 16, show: false, image: 'lugia.png'}
        ];

        $scope.shuffleCards = function() {
            $scope.cards = _.shuffle($scope.cards);
        };

        $scope.turnCard = function($card) {
            if ($card.hit || $card.show) {
                return;
            }

            if ($scope.TurnedCards.length >= 2) {
                angular.forEach($scope.TurnedCards, function($card) {
                    $card.show = false;
                });

                $scope.TurnedCards = [];
            }

            $card.show = !$card.show;

            if ($scope.TurnedCards.length == 1) {
                var turnedCard = $scope.TurnedCards[0];
                if (turnedCard.id == $card.id) {
                    turnedCard.hit = $card.hit = true;
                    $scope.TurnedCards = [];
                    return;
                }
            }

            if ($card.show) {
                $scope.TurnedCards.push($card);
            }
        };

        $scope.shuffleCards();
    });