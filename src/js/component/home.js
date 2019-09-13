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
				<div className="row">
					<div className="col-md-1">clock</div>
					<div className="col-md-1">0</div>
					<div className="col-md-1">0</div>
					<div className="col-md-1">0</div>
					<div className="col-md-1">0</div>
					<div className="col-md-1">0</div>
					<div className="col-md-1">0</div>
					<div className="col-md-1">{Counter /}</div>
				</div>
			</div>
		);
	}
}