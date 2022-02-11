import React, { useState } from "react";

const TrafficLight = () => {
	const [light, setLight] = useState("");

	return (
		<div>
			<div className="bg-dark m-2 traffic ">
				<div
					onClick={() => setLight("red")}
					className={`circle red rounded-circle m-2 ${
						light === "red" ? "turnOn" : ""
					} `}></div>
				<div
					onClick={() => setLight("yellow")}
					className={`circle yellow rounded-circle m-2 ${
						light === "yellow" ? "turnOn" : ""
					} `}></div>
				<div
					onClick={() => setLight("green")}
					className={`circle green rounded-circle m-2 ${
						light === "green" ? "turnOn" : ""
					} `}></div>
			</div>
			<button className="button btn-succes">Altern color</button>
		</div>
	);
};

export default TrafficLight;
