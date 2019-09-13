import React from "react";

export const Counter = () => {
	return (
		<div className="row">
			<div className="col-md-1">clock</div>
			<div className="col-md-1">0</div>
			<div className="col-md-1">0</div>
			<div className="col-md-1">0</div>
			<div className="col-md-1">0</div>
			<div className="col-md-1">0</div>
			<div className="col-md-1">0</div>
			<div className="col-md-1">0</div>
		</div>
	);
};
let alpha = bravo => {
	let time = 0;
	setInterval(() => {
		time += 1;
		if (time == 10) time = 0;
		return time;
	}, bravo);
};

console.log(alpha(1000));
