// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var timer_app_1 = require("./components/timer-app");
ReactDOM.render(React.createElement(timer_app_1.TimerApp, null), document.querySelector('main'));
//# sourceMappingURL=renderer.js.map