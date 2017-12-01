var DateTime = require('../DateTime.js');
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
	React.createElement(DateTime, {}),
	document.getElementById('datetime')
);
