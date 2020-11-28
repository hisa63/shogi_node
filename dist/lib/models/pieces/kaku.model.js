"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kaku = void 0;
var basePiece_model_1 = require("./basePiece.model");
var Kaku = /** @class */ (function (_super) {
    __extends(Kaku, _super);
    function Kaku() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Kaku.prototype.printPiece = function () {
        if (this.promotion)
            return '馬';
        else
            return '角';
    };
    // public printPiece () {
    //   return '角'
    // }
    Kaku.prototype.canMoveToWithoutObstical = function () {
        if (this.promotion) {
            return [
                [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8],
                [1, -1], [2, -2], [3, -3], [4, -4], [5, -5], [6, -6], [7, -7], [8, -8],
                [-1, 1], [-2, 2], [-3, 3], [-4, 4], [-5, 5], [-6, 6], [-7, 7], [-8, 8],
                [-1, -1], [-2, -2], [-3, -3], [-4, -4], [-5, -5], [-6, -6], [-7, -7], [-8, -8],
                [-1, -1], [-1, 0], [-1, 1], [0, -1], [1, 0], [0, 1]
            ];
        }
        else {
            return [
                [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8],
                [1, -1], [2, -2], [3, -3], [4, -4], [5, -5], [6, -6], [7, -7], [8, -8],
                [-1, 1], [-2, 2], [-3, 3], [-4, 4], [-5, 5], [-6, 6], [-7, 7], [-8, 8],
                [-1, -1], [-2, -2], [-3, -3], [-4, -4], [-5, -5], [-6, -6], [-7, -7], [-8, -8]
            ];
        }
    };
    return Kaku;
}(basePiece_model_1.BasePieceClass));
exports.Kaku = Kaku;
//# sourceMappingURL=kaku.model.js.map