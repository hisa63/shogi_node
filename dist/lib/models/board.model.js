"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var hu_model_1 = require("./pieces/hu.model");
var hisya_model_1 = require("./pieces/hisya.model");
var kaku_model_1 = require("./pieces/kaku.model");
var kin_model_1 = require("./pieces/kin.model");
var gin_model_1 = require("./pieces/gin.model");
var keima_model_1 = require("./pieces/keima.model");
var kyosya_model_1 = require("./pieces/kyosya.model");
var ou_model_1 = require("./pieces/ou.model");
var Board = /** @class */ (function () {
    function Board() {
        this.positions = [
            [null, null, null, null, null, null, null, null, null,],
            [null, null, null, null, null, null, null, null, null,],
            [null, null, null, null, null, null, null, null, null,],
            [null, null, null, null, null, null, null, null, null,],
            [null, null, null, null, null, null, null, null, null,],
            [null, null, null, null, null, null, null, null, null,],
            [null, null, null, null, null, null, null, null, null,],
            [null, null, null, null, null, null, null, null, null,],
            [null, null, null, null, null, null, null, null, null,],
        ];
        this.pieces = [];
        this.baseBoardPosition = [
            [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8],
            [1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8],
            [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8],
            [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8],
            [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8],
            [5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8],
            [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [6, 8],
            [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8],
            [8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 8]
        ];
    }
    Board.prototype.initBoard = function () {
        this.player1 = this.player1;
        this.player2 = this.player2;
        // player_1 ----------------------------
        this.pieces.push(new kyosya_model_1.Kyosya(this.player1, [8, 0], this));
        this.pieces.push(new keima_model_1.Keima(this.player1, [8, 1], this));
        this.pieces.push(new gin_model_1.Gin(this.player1, [8, 2], this));
        this.pieces.push(new kin_model_1.Kin(this.player1, [8, 3], this));
        this.pieces.push(new ou_model_1.Ou(this.player1, [8, 4], this));
        this.pieces.push(new kin_model_1.Kin(this.player1, [8, 5], this));
        this.pieces.push(new gin_model_1.Gin(this.player1, [8, 6], this));
        this.pieces.push(new keima_model_1.Keima(this.player1, [8, 7], this));
        this.pieces.push(new kyosya_model_1.Kyosya(this.player1, [8, 8], this));
        this.pieces.push(new kaku_model_1.Kaku(this.player1, [7, 1], this));
        this.pieces.push(new hisya_model_1.Hisya(this.player1, [7, 7], this));
        for (var i = 0; i < 9; i++) {
            this.pieces.push(new hu_model_1.Hu(this.player1, [6, i], this));
        }
        // this.positions[8][3] = new Kin(this.player1, [8, 3], this)
        // this.positions[8][5] = new Kin(this.player1, [8, 5], this)
        // this.positions[8][2] = new Gin(this.player1, [8, 2], this)
        // this.positions[8][6] = new Gin(this.player1, [8, 6], this)
        // this.positions[8][1] = new Keima(this.player1, [8, 1], this)
        // this.positions[8][7] = new Keima(this.player1, [8, 7], this)
        // this.positions[8][0] = new Kyosya(this.player1, [8, 0], this)
        // this.positions[8][8] = new Kyosya(this.player1, [8, 8], this)
        // this.positions[8][4] = new Ou(this.player1, [8, 4], this)
        // console.log(this.positions[8][3].currentPosition)
        // console.log(this.positions[8][3].currentPosition[0] + this.positions[8][3].currentPosition[0])
        // console.log(this.positions[8][3].canMoveToWithoutObstical ())
        // player_2 ----------------------------
        for (var i = 0; i < 9; i++) {
            this.pieces.push(new hu_model_1.Hu(this.player2, [2, i], this));
        }
        this.pieces.push(new kaku_model_1.Kaku(this.player2, [1, 7], this));
        this.pieces.push(new hisya_model_1.Hisya(this.player2, [1, 1], this));
        this.pieces.push(new kyosya_model_1.Kyosya(this.player2, [0, 0], this));
        this.pieces.push(new keima_model_1.Keima(this.player2, [0, 1], this));
        this.pieces.push(new gin_model_1.Gin(this.player2, [0, 2], this));
        this.pieces.push(new kin_model_1.Kin(this.player2, [0, 3], this));
        this.pieces.push(new ou_model_1.Ou(this.player2, [0, 4], this));
        this.pieces.push(new kin_model_1.Kin(this.player2, [0, 5], this));
        this.pieces.push(new gin_model_1.Gin(this.player2, [0, 6], this));
        this.pieces.push(new keima_model_1.Keima(this.player2, [0, 7], this));
        this.pieces.push(new kyosya_model_1.Kyosya(this.player2, [0, 8], this));
        // for (let i = 0; i < 9; i++) {
        // this.positions[2][i] = new Hu(this.player2, [2, i], this)
        // }
        // this.positions[1][1] = new Hisya(this.player2, [1, 1], this) 
        // this.positions[1][7] = new Kaku(this.player2, [1, 7], this)
        // this.positions[0][3] = new Kin(this.player2, [0, 3], this)
        // this.positions[0][5] = new Kin(this.player2, [0, 5], this)
        // this.positions[0][2] = new Gin(this.player2, [0, 2], this)
        // this.positions[0][6] = new Gin(this.player2, [0, 6], this)
        // this.positions[0][1] = new Keima(this.player2, [0, 1], this)
        // this.positions[0][7] = new Keima(this.player2, [0, 7], this)
        // this.positions[0][0] = new Kyosya(this.player2, [0, 0], this)
        // this.positions[0][8] = new Kyosya(this.player2, [0, 8], this)
        // this.positions[0][4] = new Ou(this.player2, [0, 4], this)
    };
    // methodsなど
    Board.prototype.print = function () {
        console.log('-------------------------------------------------------');
        this.positions.forEach(function (row) {
            var pieceFaces = row.map(function (position) {
                if (position === null) {
                    return '   ';
                }
                else {
                    return "" + position.printPiece() + (position.player.isFirstMove ? '↑' : '↓');
                }
            });
            console.log("| " + pieceFaces.join(' | ') + " |");
            console.log('-------------------------------------------------------');
        });
    };
    return Board;
}());
exports.Board = Board;
/**
 * TODO:
 * - BasePieceのCurrent Positionを正しく実装してください。
 * /- それぞれのコマのcanMoveToWithoutObsticalを実装してください
 * - BasePieceにcanMoveToを実装してください (以下を考慮する必要があります)
 *   - 自分の現在の位置
 *   - 自分がPlayer1 か Player2か
 *   - 将棋盤の端
 *   - 自分の他のコマ
 *   - 敵のコマ
 * - Gameに isGameOver()を実装して、試合が終わったかどうかを判断するメソッドを実装する
 * - index.tsに while loopを実装して、ゲームが終わるまでユーザーインプットを求め続けるようにする
 */
/**
 * QUESTION
 * - game.model.ts(8) 型宣言？ boardはBoardクラスという型という宣言という認識で合っているか？
 * -export class クラス名 extends 継承するクラス implements BasePiece
 */ 
//# sourceMappingURL=board.model.js.map