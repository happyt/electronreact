"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var timer;
var Clock = (function (_super) {
    __extends(Clock, _super);
    function Clock() {
        _super.call(this);
        this.state = {
            time: ""
        };
        this.tick();
        this.tick = this.tick.bind(this);
    }
    Clock.prototype.tick = function () {
        this.state.time = new Date().toLocaleTimeString();
    };
    Clock.prototype.componentWillMount = function () {
        timer = setInterval(this.tick, 1000);
    };
    Clock.prototype.componentWillUnmount = function () {
        //  timer = null;
    };
    Clock.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement("h4", null, 
                "Time is ", 
                this.state.time, 
                ".")
        ));
    };
    return Clock;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Clock;
var Welcome = (function (_super) {
    __extends(Welcome, _super);
    function Welcome() {
        _super.apply(this, arguments);
    }
    Welcome.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement("h1", null, 
                "Time is ", 
                this.props.thetime), 
            ";"));
    };
    return Welcome;
}(React.Component));
//# sourceMappingURL=clock.js.map