angular.module('memoryGame', [])
    .controller('CardsController', function($scope, $interpolate, $window) {
        var cards = ['bulbasaur.png', 'butterfree.png', 'quirtle.png', 'charmander.png', 'eevee.png', 'haunter.png',
            'horsea.png', 'meowth.png', 'nidorina.png', 'pidgey.png', 'pikachu.png', 'sandshrew.png', 'tauros.png',
            'togepi.png', 'vulpix.png', 'lugia.png'];
        $scope.concludedCards = [];
        $scope.TurnedCards = [];
        $scope.cards = [];
        $scope.attempts = 0;
        $scope.failedAttempts = 0;

        $scope.resetGame = function() {
            $scope.cards = _.flatMap(cards, function(cardImage, index) {
                var card = {hit: false, id: ++index, show: false, image: cardImage};
                var _card = angular.copy(card);
                return [card, _card];
            });

            $scope.shuffleCards();
            $scope.attempts = 0;
        };

        $scope.shuffleCards = function() {
            $scope.cards = _.shuffle($scope.cards);
        };

        $scope.turnDown = function() {
            angular.forEach($scope.TurnedCards, function($card) {
                $card.show = false;
            });

            $scope.TurnedCards = [];
        };

        $scope.compareCards = function($card) {
            if ($scope.TurnedCards.length != 1) {
                return false;
            }

            var turnedCard = $scope.TurnedCards[0];
            if (turnedCard.id != $card.id) {
                return false;
            }

            turnedCard.hit = $card.hit = true;
            $scope.TurnedCards = [];
            $scope.concludedCards.push($card.id);

            if ($scope.concludedCards.length == cards.length) {
                $scope.concludedCards = [];
                $window.alert($interpolate("Parabêns você ganhou em {{attempts}} jogadas!")($scope));
                $scope.resetGame();
            }

            return true;
        };

        $scope.turnCard = function($card, event) {
            event.preventDefault();
            var attemptHit = false;

            if ($card.hit || $card.show) {
                return;
            }

            if ($scope.TurnedCards.length >= 2) {
                $scope.turnDown();
                attemptHit = true;
            }

            $card.show = !$card.show;
            $scope.attempts++;

            if ($scope.compareCards($card)) {
                return;
            }

            if (attemptHit) {
                $scope.failedAttempts++;
            }

            $scope.TurnedCards.push($card);
        };
    });