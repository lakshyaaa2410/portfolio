import React from "react";
import Leetcode from "./icons/Leetcode";
import LinkedIn from "./icons/LinkedIn";
import Github from "./icons/Github";
import Instagram from "./icons/Instagram";
import Gmail from "./icons/Gmail";
import AvatarMorph from "./utils/AvatarMorph";

function Landing() {
	return (
		<>
			<div className="grid grid-cols-2 mt-10">
				<div className="text-center flex items-center justify-center">
					<div>
						<h1
							className="text-3xl text-wrap italic"
							style={{ fontFamily: "'Press Start 2P', cursive" }}
						>
							Design. Develop. Deploy. Deliver.
						</h1>
						<p
							className="mt-10 text-sm/8 italic"
							style={{ fontFamily: "'Press Start 2P', cursive" }}
						>
							I'm Lakshya, Full-Stack Developer and DevOps
							Engineer who turns ideas into production-ready apps.
						</p>
						<div className="flex flex-row justify-center gap-10 mt-10 text-white">
							<button className="bg-white text-[#0d1c2f] px-6 py-1.5 rounded-md italic cursor-pointer">
								Resume
							</button>
							<button className="border-white border-2 px-6 py-1.5 rounded-md hover:bg-white hover:text-[#0d1c2f] cursor-pointer">
								Contact
							</button>
						</div>
						<div className="mt-10 flex flex-row space-x-8 justify-center">
							<Leetcode pop="#f89d17" height="27.5px" />
							<Github pop="white" height="27.5px" />
							<Instagram pop="#ff0e5b" height="27.5px" />
							<LinkedIn pop="#0a66c2" height="27.5px" />
							<Gmail pop="red" height="27.5px" />
						</div>
					</div>
				</div>
				<div className="flex justify-end">
					<AvatarMorph />
				</div>
			</div>
		</>
	);
}

export default Landing;
