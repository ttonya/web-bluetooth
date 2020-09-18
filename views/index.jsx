import React from "react";

export default function index() {
	const onClick = () => {
		navigator.bluetooth
			.requestDevice({
				filters: [
					{
						name: "BT SPEAKER", // you can add device name here
						optionalServices: ["battery_service"],
					},
				],
			})
			.then((device) => {
				console.log(device);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			<button onClick={onClick}>Connect</button>
		</div>
	);
}
