import React, { useState } from "react";

const TrafficLight = () => {
	const [light, setLight] = useState("");

	return (
		<div className="myDiv">
			<div className=" bg-dark m-2 traffic ">
				<div
					onClick={() => setLight("red")}
					className={`circle colorRed rounded-circle m-2 ${
						light === "red" ? "turnOnRed" : ""
					} `}></div>
				<div
					onClick={() => setLight("yellow")}
					className={`circle colorYellow rounded-circle m-2 ${
						light === "yellow" ? "turnOnYellow" : ""
					} `}></div>
				<div
					onClick={() => setLight("green")}
					className={`circle colorGreen rounded-circle m-2 ${
						light === "green" ? "turnOnGreen" : ""
					} `}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
