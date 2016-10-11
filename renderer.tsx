// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


import React = require('react');
import ReactDOM = require('react-dom');
import {TimerApp} from "./components/timer-app"

ReactDOM.render(<TimerApp />, document.querySelector('main'));
