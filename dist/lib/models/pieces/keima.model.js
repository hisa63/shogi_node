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
exports.Keima = void 0;
var basePiece_model_1 = require("./basePiece.model");
var Keima = /** @class */ (function (_super) {
    __extends(Keima, _super);
    function Keima() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Keima.prototype.printPiece = function () {
        if (this.promotion)
            return '圭';
        else
            return '袿';
    };
    Keima.prototype.canMoveToWithoutObstical = function () {
        if (this.promotion)
            return [[-1, -1], [-1, 0], [-1, 1], [0, -1], [1, 0], [0, 1]];
        else
            return [[-2, 1], [-2, -1]];
    };
    return Keima;
}(basePiece_model_1.BasePieceClass));
exports.Keima = Keima;
//# sourceMappingURL=keima.model.js.map