"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePieceClass = void 0;
var BasePieceClass = /** @class */ (function () {
    function BasePieceClass(player, currentPosition, board) {
        this.player = player;
        this.currentPosition = currentPosition;
        this.board = board;
        this.board.positions[currentPosition[0]][currentPosition[1]] = this;
    }
    // moveTo(position: number[]): void {
    //   if (!this.movableTo(position)) throw new Error('you cannot move to that position')
    //   // set null to my current location (元々いた場所をnullにする)
    //   this.board.positions[this.currentPosition[0]][this.currentPosition[1]] = null
    //   // set new location of the board and the piece (新しく配置したpositionにpieceの情報を与える)
    //   this.board.positions[position[0]][position[1]] = this
    //   this.currentPosition = position
    //   // remove the enemy piece if killed (相手のコマを奪った場合、そのコマをinActiveにする)
    // }
    // movableTo(position: number[]): boolean {
    //   let isMove = true
    //   // can I move to the new position? (指定のpositionに移動できるか？) 
    //   // is the new position within the shogi board? (指定場所は将棋盤の中で指定されているか？)
    //   for (let i = 0; i < this.board.baseBoardPosition.length; i++) {
    //     if ((position[0] == this.board.baseBoardPosition[i][0]) && (position[1] == this.board.baseBoardPosition[i][1])) {
    //       isMove = true
    //       break;
    //     } else {
    //       isMove = false
    //     }
    //   }
    //   if (!(isMove)) {
    //     throw new Error('将棋盤のエリア内で指定してください')
    //     return false
    //   }
    //   // is the location included in canMoveToWithoutObstical? (指定場所は移動可能エリアに含まれているか？)  
    //   let canMoveTo: number[];
    //   for (let i = 0; i < this.canMoveToWithoutObstical().length; i++) {
    //     canMoveTo = [this.currentPosition[0] + this.canMoveToWithoutObstical()[i][0],
    //       this.currentPosition[1] + this.canMoveToWithoutObstical()[i][1]]
    //     if ((position[0] == canMoveTo[0]) && (position[1] == canMoveTo[1])) {
    //       isMove = true
    //       break;
    //     } else {
    //       isMove = false
    //     }
    //   }
    //   if (!(isMove)) {
    //     throw new Error('選択中の駒では移動できない場所です')
    //     return false
    //   }
    //   // is there any obsticals between current position and the new position (移動する間に障害物はないか？)
    //   let moveDirection: number[]
    //   let sumY: number
    //   let sumX: number
    //   let absoluteY: number
    //   let absoluteX: number
    //   // let distance: number 
    //   sumY = position[0] - this.currentPosition[0]
    //   sumX = position[1] - this.currentPosition[1]
    //   absoluteY = Math.abs(sumY)
    //   absoluteX = Math.abs(sumX)
    //   moveDirection = [position[0] - this.currentPosition[0], position[1] - this.currentPosition[1]]
    //   // distance = Math.sqrt(sumY ** 2 + sumX ** 2) 
    //   // moveDirection[0] /= distance
    //   // moveDirection[1] /= distance
    //   if (moveDirection[0] != 0) {
    //     moveDirection[0] /= absoluteY
    //   }
    //   if (moveDirection[1] != 0) {
    //     moveDirection[1] /= absoluteX
    //   }
    //   if(!(this.checkObsticalBetween(moveDirection, position))) {
    //     throw new Error('進路に障害物があります')
    //     return false
    //   }
    //   // is the destination null or enemy? (目的地はnullか敵ですか？)
    //   if (!(this.board.positions[position[0]][position[1]] == null)) {
    //     const piece = this.board.positions[position[0]][position[1]] as BasePieceClass        
    //     if (piece.player.isFirstMove === this.player.isFirstMove) {
    //       isMove = false
    //     } else {
    //       isMove = true
    //     }
    //   }
    //   if (!isMove) { throw new Error('指定場所に自身の駒がいます') }
    //   return isMove
    // }
    // -------------------------------------------------------------------------------------------------
    BasePieceClass.prototype.moveTo = function (position) {
        if (this.movableTo(position) == 1) {
            return 1; // '将棋盤のエリア内で指定してください'
        }
        else if (this.movableTo(position) == 2) {
            return 2; //  '選択中の駒では移動できない場所です'
        }
        else if (this.movableTo(position) == 3) {
            return 3; // '進路に障害物があります'
        }
        else if (this.movableTo(position) == 4) {
            return 4; // '指定場所に自身の駒がいます'
        }
        // set null to my current location (元々いた場所をnullにする)
        this.board.positions[this.currentPosition[0]][this.currentPosition[1]] = null;
        // set new location of the board and the piece (新しく配置したpositionにpieceの情報を与える)
        this.board.positions[position[0]][position[1]] = this;
        this.currentPosition = position;
        // remove the enemy piece if killed (相手のコマを奪った場合、そのコマをinActiveにする)
        return 0;
    };
    BasePieceClass.prototype.movableTo = function (position) {
        var isMove = true;
        var errorNumber = 0;
        // can I move to the new position? (指定のpositionに移動できるか？) 
        // is the new position within the shogi board? (指定場所は将棋盤の中で指定されているか？)
        for (var i = 0; i < this.board.baseBoardPosition.length; i++) {
            if ((position[0] == this.board.baseBoardPosition[i][0]) && (position[1] == this.board.baseBoardPosition[i][1])) {
                isMove = true;
                break;
            }
            else {
                isMove = false;
            }
        }
        if (!(isMove)) {
            errorNumber = 1;
            return errorNumber; // throw new Error('将棋盤のエリア内で指定してください')
        }
        // is the location included in canMoveToWithoutObstical? (指定場所は移動可能エリアに含まれているか？)  
        var canMoveTo;
        for (var i = 0; i < this.canMoveToWithoutObstical().length; i++) {
            canMoveTo = [this.currentPosition[0] + this.canMoveToWithoutObstical()[i][0],
                this.currentPosition[1] + this.canMoveToWithoutObstical()[i][1]];
            if ((position[0] == canMoveTo[0]) && (position[1] == canMoveTo[1])) {
                isMove = true;
                break;
            }
            else {
                isMove = false;
            }
        }
        if (!(isMove)) {
            errorNumber = 2;
            return errorNumber; // throw new Error('選択中の駒では移動できない場所です')
        }
        // is there any obsticals between current position and the new position (移動する間に障害物はないか？)
        var moveDirection;
        var sumY;
        var sumX;
        var absoluteY;
        var absoluteX;
        // let distance: number 
        sumY = position[0] - this.currentPosition[0];
        sumX = position[1] - this.currentPosition[1];
        absoluteY = Math.abs(sumY);
        absoluteX = Math.abs(sumX);
        moveDirection = [position[0] - this.currentPosition[0], position[1] - this.currentPosition[1]];
        // distance = Math.sqrt(sumY ** 2 + sumX ** 2) 
        // moveDirection[0] /= distance
        // moveDirection[1] /= distance
        if (moveDirection[0] != 0) {
            moveDirection[0] /= absoluteY;
        }
        if (moveDirection[1] != 0) {
            moveDirection[1] /= absoluteX;
        }
        if (!(this.checkObsticalBetween(moveDirection, position))) {
            errorNumber = 3;
            return errorNumber; // throw new Error('進路に障害物があります')
        }
        // is the destination null or enemy? (目的地はnullか敵ですか？)
        if (!(this.board.positions[position[0]][position[1]] == null)) {
            var piece = this.board.positions[position[0]][position[1]];
            if (piece.player.isFirstMove === this.player.isFirstMove) {
                isMove = false;
            }
            else {
                isMove = true;
            }
        }
        if (!isMove) {
            errorNumber = 4;
            return errorNumber; // throw new Error('指定場所に自身の駒がいます')
        }
        return errorNumber;
    };
    // -------------------------------------------------------------------------------------------------
    BasePieceClass.prototype.printPiece = function () {
        return '';
    };
    BasePieceClass.prototype.canMoveToWithoutObstical = function () { return []; };
    BasePieceClass.prototype.checkObsticalBetween = function (moveDirection, position) {
        var positionY = this.currentPosition[0];
        var positionX = this.currentPosition[1];
        var checkPosition = [positionY, positionX];
        if ((moveDirection[0] == 0) && (moveDirection[1] == 1)) { // 飛 x方向（右）
            for (var i = checkPosition[1] + 1; i < position[1]; i++) {
                checkPosition[1] += 1;
                if (!(this.board.positions[checkPosition[0]][checkPosition[1]] == null)) { //pieceが存在するなら
                    return false;
                }
            }
        }
        else if ((moveDirection[0] == 0) && (moveDirection[1] == -1)) { // 飛 -x方向（左）
            for (var i = checkPosition[1] - 1; i > position[1]; i--) {
                checkPosition[1] -= 1;
                if (!(this.board.positions[checkPosition[0]][checkPosition[1]] == null)) { //pieceが存在するなら
                    return false;
                }
            }
        }
        else if ((moveDirection[0] == -1) && (moveDirection[1] == 0)) { // 飛 y方向（下）
            for (var i = checkPosition[0] - 1; i > position[0]; i--) {
                checkPosition[0] -= 1;
                if (!(this.board.positions[checkPosition[0]][checkPosition[1]] == null)) { //pieceが存在するなら
                    return false;
                }
            }
        }
        else if ((moveDirection[0] == 1) && (moveDirection[1] == 0)) { // 飛 -y方向(上)
            for (var i = checkPosition[0] + 1; i < position[0]; i++) {
                checkPosition[0] += 1;
                if (!(this.board.positions[checkPosition[0]][checkPosition[1]] == null)) { //pieceが存在するなら
                    return false;
                }
            }
            /////////////////////   ここから角    //////////////////////
        }
        else if ((moveDirection[0] == -1) && (moveDirection[1] == 1)) { // 角 (右上)
            for (var i = checkPosition[1] + 1; i < position[1]; i++) { // currentPieceのxがpositionのxまで（x == yなのでxのみで考える）
                checkPosition[0] -= 1;
                checkPosition[1] += 1;
                if (!(this.board.positions[checkPosition[0]][checkPosition[1]] == null)) { //pieceが存在するなら
                    return false;
                }
            }
        }
        else if ((moveDirection[0] == 1) && (moveDirection[1] == 1)) { // 角（右下）
            for (var i = checkPosition[1] + 1; i < position[1]; i++) { // currentPieceのxがpositionのxまで（x == yなのでxのみで考える）
                checkPosition[0] += 1;
                checkPosition[1] += 1;
                if (!(this.board.positions[checkPosition[0]][checkPosition[1]] == null)) { //pieceが存在するなら
                    return false;
                }
            }
        }
        else if ((moveDirection[0] == -1) && (moveDirection[1] == -1)) { // 角（左上）
            for (var i = checkPosition[1] - 1; i > position[1]; i--) { // currentPieceのxがpositionのxまで（x == yなのでxのみで考える）
                checkPosition[0] -= 1;
                checkPosition[1] -= 1;
                if (!(this.board.positions[checkPosition[0]][checkPosition[1]] == null)) { //pieceが存在するなら
                    return false;
                }
            }
        }
        else if ((moveDirection[0] == 1) && (moveDirection[1] == -1)) { // 角（左下）
            for (var i = checkPosition[1] - 1; i > position[1]; i--) { // currentPieceのxがpositionのxまで（x == yなのでxのみで考える）
                checkPosition[0] += 1;
                checkPosition[1] -= 1;
                if (!(this.board.positions[checkPosition[0]][checkPosition[1]] == null)) { //pieceが存在するなら
                    return false;
                }
            }
        }
        return true;
    };
    return BasePieceClass;
}());
exports.BasePieceClass = BasePieceClass;
// --------------------------------------- 以下、関係なし ---------------------------------------------
// export interface BasePiece {
//   printPiece (): string;
//   canMoveToWithoutObstical (): number[][]
// }
// export interface BasePiece {
//   printNumber (): number
// }
// class Animal {
//   name: string;
//   old: number;
//   constructor(name: string, old: number) {
//     this.name = name; //thisはclass Animal,this.nameはclass Animalのname: stringをスコープ, nameはcostructorの引数name: stringをスコープ
//     this.old = old;
//   }
//   showName() {
//     console.log(this.name)
//   }
//   showOld() {
//     console.log(this.old)
//   }
// }
// export default Animal
//# sourceMappingURL=basePiece.model.js.map