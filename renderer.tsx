// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


import React = require('react');
import ReactDOM = require('react-dom');

interface Props {
}

class HelloWorld extends React.Component<Props, {}> {
    render () {
        return <h1>Hello World React new</h1>;
    }
}

ReactDOM.render(<HelloWorld />, document.querySelector('main'));
