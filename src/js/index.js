//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//include bootstrap npm library into the bundle
import "bootstrap";
//include your index.scss file into the bundle
import "../styles/index.scss";
//import your own components
//import { Home } from "./component/home.js";

function SimpleCounter(props) {
	return (
		<div className="card text-center bg-dark text-primary">
			<div className="d-flex justify-content-center">
				<div className="car-hearder">
					<i className="far fa-clock" />
				</div>
				<div className="display-3">{props.digitOne % 10}</div>
			</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	digitOne: PropTypes.number
};

setInterval(function() {
	let one = Math.floor((Math.random() * 100) / 10);
	console.log({ one });
	ReactDOM.render(
		<SimpleCounter digitOne={one} />,
		document.querySelector("#app")
	);
}, 1000);
