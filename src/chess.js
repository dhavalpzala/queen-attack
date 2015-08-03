function chess() {
    var chessObj = {}, size = 8, startIndex = 0, pieces = {};
    chessObj.pieceType = {
        whiteQueen : 0,
        blackQueen : 1
    };
    chessObj.initPiece = function(pieceType, row, column) {
        if (row && column && !isNaN(row) && !isNaN(column)
                && row < (size + startIndex) && column < (size + startIndex)
                && row >= startIndex && column >= startIndex) {
            pieces[pieceType] = {
                row : row,
                column : column
            };
        } else {
            pieces[pieceType] = null;
            return false;
        }
    };
    chessObj.canAttack = function(onePiece, otherPiece) {
        var index, lastRowIndex = (startIndex + size) - 1, lastColumnIndex = (startIndex + size) - 1;
        if (pieces[onePiece] && pieces[otherPiece]) {
            switch (onePiece) {
            case this.pieceType.whiteQueen:
            case this.pieceType.blackQueen:
                // row check - line equation x = c
                if (pieces[onePiece].row === pieces[otherPiece].row) {
                    return true;
                }

                // column check - line equation y = c
                if (pieces[onePiece].column === pieces[otherPiece].column) {
                    return true;
                }

                // diagonal check - line equation y = x + c or y = -x + c
                var slope = (pieces[onePiece].row - pieces[otherPiece].row * 1.0)
                        / (pieces[onePiece].column - pieces[otherPiece].column);
                if (Math.abs(slope) === 1) {
                    return true;
                }
                break;
            }
        }
        return false;
    };
    return chessObj;
}