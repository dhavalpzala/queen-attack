(function() {
    var app = angular.module("queenAttack", []);
    app.controller("MainController", ['$scope',function($scope) {
        var chessObj = new chess();
        $scope.check = function() {
            $scope.isAttackable = false;
            if (this.whiteQueenPosition && this.blackQueenPosition) {
                var wQueenPosition = this.whiteQueenPosition.split(','), 
                bQueenPosition = this.blackQueenPosition.split(',');
                if(wQueenPosition.length === 2 && bQueenPosition.length === 2){
                    chessObj.initPiece(chessObj.pieceType.whiteQueen, wQueenPosition[0], wQueenPosition[1]);
                    chessObj.initPiece(chessObj.pieceType.blackQueen, bQueenPosition[0], bQueenPosition[1]);
                    $scope.isAttackable =  chessObj.canAttack(chessObj.pieceType.whiteQueen, chessObj.pieceType.blackQueen);
                }
            }
        };
    }]);
})();