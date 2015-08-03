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
        if (pieces[onePiece] && pieces[otherPiece]) {
            if (onePiece === this.pieceType.whiteQueen
                    || onePiece === this.pieceType.blackQueen) {
                // row check - line equation x = c and column check - line
                // equation y = c
                if (pieces[onePiece].row === pieces[otherPiece].row
                        || pieces[onePiece].column === pieces[otherPiece].column) {
                    return true;
                }

                // diagonal check - line equation y = x + c or y = -x + c
                var slope = (pieces[onePiece].row - pieces[otherPiece].row * 1.0)
                        / (pieces[onePiece].column - pieces[otherPiece].column);
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