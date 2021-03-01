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
				<div className="display-3">{props.digitFour % 10}</div>
				<div className="display-3">{props.digitThree % 10}</div>
				<div className="display-3">{props.digitTwo % 10}</div>
				<div className="display-3">{props.digitOne % 10}</div>
			</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

let counter = 0;

setInterval(function() {
	const four = Math.floor(counter / 10000);
	const three = Math.floor(counter / 1000);
	const two = Math.floor(counter / 100);
	const one = Math.floor(counter / 10);
	//console.log(one, two, three, four);
	counter++;
	//render your react application
	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
