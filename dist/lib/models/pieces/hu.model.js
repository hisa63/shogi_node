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
exports.Hu = void 0;
var basePiece_model_1 = require("./basePiece.model");
var Hu = /** @class */ (function (_super) {
    __extends(Hu, _super);
    function Hu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hu.prototype.printPiece = function () {
        return '歩';
    };
    Hu.prototype.canMoveToWithoutObstical = function () {
        return [[-1, 0]];
    };
    return Hu;
}(basePiece_model_1.BasePieceClass));
exports.Hu = Hu;
//# sourceMappingURL=hu.model.js.map