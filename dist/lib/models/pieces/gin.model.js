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
exports.Gin = void 0;
var basePiece_model_1 = require("./basePiece.model");
var Gin = /** @class */ (function (_super) {
    __extends(Gin, _super);
    function Gin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gin.prototype.printPiece = function () {
        if (this.promotion)
            return '全';
        else
            return '銀';
    };
    Gin.prototype.canMoveToWithoutObstical = function () {
        if (this.promotion) {
            return [
                [-1, -1], [-1, 0], [-1, 1],
                [0, -1], [1, 0], [0, 1]
            ];
        }
        else {
            return [
                [-1, -1], [-1, 0], [-1, 1],
                [1, -1], [1, 1]
            ];
        }
    };
    return Gin;
}(basePiece_model_1.BasePieceClass));
exports.Gin = Gin;
//# sourceMappingURL=gin.model.js.map