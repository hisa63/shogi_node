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
exports.Kyosya = void 0;
var basePiece_model_1 = require("./basePiece.model");
var Kyosya = /** @class */ (function (_super) {
    __extends(Kyosya, _super);
    function Kyosya() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Kyosya.prototype.printPiece = function () {
        if (this.promotion)
            return '香';
        else
            return '杏';
    };
    Kyosya.prototype.canMoveToWithoutObstical = function () {
        if (this.promotion) {
            return [
                [-1, -1], [-1, 0], [-1, 1],
                [0, -1], [1, 0], [0, 1]
            ];
        }
        else {
            return [
                [-1, 0], [-2, 0], [-3, 0],
                [-4, 0], [-5, 0], [-6, 0],
                [-7, 0], [-8, 0]
            ];
        }
    };
    return Kyosya;
}(basePiece_model_1.BasePieceClass));
exports.Kyosya = Kyosya;
//# sourceMappingURL=kyosya.model.js.map