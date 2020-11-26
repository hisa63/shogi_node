"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var player_model_1 = require("./player.model");
var board_model_1 = require("./board.model");
var Game = /** @class */ (function () {
    function Game() {
        this.board = new board_model_1.Board();
    }
    Game.prototype.initGame = function () {
        var player1 = new player_model_1.Player(true);
        var player2 = new player_model_1.Player(false);
        this.board.player1 = player1;
        this.board.player2 = player2;
        this.board.initBoard();
    };
    Game.prototype.print = function () {
        this.board.print();
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.model.js.map