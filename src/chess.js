function chess() {
    var obj = {}, size = 8, startIndex = 0, pieces = {};
    obj.pieceType = {
            whiteQueen : 0,
            blackQueen : 1
    };
    function isValid(number) {
        if (number) {
            return !isNaN(number) && number < (size + startIndex)
            && number >= startIndex;
        }
        return false;
    }
    obj.initPiece = function(pieceType, row, column) {
        pieces[pieceType] = null;
        if (isValid(row) && isValid(column)) {
            pieces[pieceType] = {
                    row : row,
                    column : column
            };

        }
    };
    obj.canAttack = function(onePiece, otherPiece) {
        var piece =pieces[onePiece] , opponentPeice = pieces[otherPiece];
        if ( piece&& opponentPeice) {
            if (onePiece === this.pieceType.whiteQueen
                    || onePiece === this.pieceType.blackQueen) {
                // row check - line equation x = c and column check - line
                // equation y = c
                if (piece.row === opponentPeice.row
                        || piece.column === opponentPeice.column) {
                    return true;
                }

                // diagonal check - line equation y = x + c or y = -x + c
                var slope = (piece.row - opponentPeice.row * 1.0)
                / (piece.column - opponentPeice.column);
                if (Math.abs(slope) === 1) {
                    return true;
                }
            }

            // other conditions will be here
            else if (1) {
                return false;
            }
        }
        return false;
    };
    return obj;
}