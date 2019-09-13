import React from "react";
import Proptypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Counter } from "./Counter.js";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<Counter />
			</div>
		);
	}
}
