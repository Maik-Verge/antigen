import React from "react";
import ReactDOM from "react-dom";

import Hello from "./components/Hello";

class Hello extends React.Component {
	render() {
		return <h3>Hello React wiht Es6</h3>;
	}
}

ReactDOM.render(<Hello />, document.getElementById('react'));
