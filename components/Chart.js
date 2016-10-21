"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Chart = (function (_super) {
    __extends(Chart, _super);
    function Chart() {
        _super.call(this);
    }
    Chart.prototype.render = function () {
        return (React.createElement("h1", null, "Hello, World!"));
    };
    return Chart;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Chart;
//# sourceMappingURL=chart.js.map