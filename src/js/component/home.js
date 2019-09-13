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
					<div className="four">{props.digitfour}</div>
					<div className="three">{props.digitthree}</div>
					<div className="two">{props.digittwo}</div>
					<div className="one">{props.digitone}</div>
				</div>
			</div>
		);
	}
}

let alp = bravo => {
	let time = 0;
	setInterval(() => {
		time += 1;
		return time;
	}, bravo);
};

ReactDOM.render(

)