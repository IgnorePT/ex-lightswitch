import { useState } from "react";
import "./styles.css";

const LightSwitch = () => {
	// Modifique o seu estado com recurso ao useState
	const [lightSwitchState, setLightSwitchState] = useState(false);

	console.log(lightSwitchState);
	// lightSwitchState ? false : true
	// !lightSwitcState

	return (
		<div className={`switch-container ${lightSwitchState && "on"}`}>
			<label
				onClick={() => setLightSwitchState(!lightSwitchState)}
				htmlFor="light-switch"
				id="light-switch-label"
			>
				<div className=""></div>
				<div className="switch"></div>
				<div className="screw"></div>
			</label>
			<div id="background"></div>
		</div>
	);
};

export default LightSwitch;
