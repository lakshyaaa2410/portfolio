import React from "react";
import Leetcode from "./icons/Leetcode";
import LinkedIn from "./icons/LinkedIn";
import Github from "./icons/Github";
import Instagram from "./icons/Instagram";
import Gmail from "./icons/Gmail";

function Landing() {
	return (
		<div className="grid grid-cols-2 mt-5">
			<div className="text-center flex items-center justify-center">
				<div>
					<h1
						className="text-5xl text-wrap italic"
						style={{ fontFamily: "'Press Start 2P', cursive" }}
					>
						Design. Develop. Deploy. Deliver.
					</h1>
					<p
						className="mt-10 text-sm italic"
						style={{ fontFamily: "'Press Start 2P', cursive" }}
					>
						From local build to cloud production - I handle the
						journey
					</p>
					<div className="mt-10 flex flex-row space-x-8 justify-center">
						<LinkedIn pop="#0a66c2" height="35px" />
						<Leetcode pop="#f89d17" height="35px" />
						<Github pop="white" height="35px" />
						<Instagram pop="#ff0e5b" height="35px" />
						<Gmail pop="red" height="35px" />
					</div>
				</div>
			</div>
			<div className="flex justify-end">
				<img src="/Hero.png" className="h-100 object-contain" />
			</div>
		</div>
	);
}

export default Landing;
