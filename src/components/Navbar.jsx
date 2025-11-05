import React from "react";
import { Router, Link, NavLink } from "react-router";

function Navbar() {
	return (
		<nav className="block w-full max-w-5xl p-4 mx-auto bg-transparent rounded-2xl shadow-md mb-4 z-20">
			<div className="container flex flex-wrap items-center justify-between mx-auto text-white">
				<NavLink>Lakshya Choudhary</NavLink>

				<div className="my-auto">
					<ul className="flex flex-row gap-8">
						<li className="flex items-center text-md gap-x-2">
							<NavLink to={"/"}>Home</NavLink>
						</li>
						<li className="flex items-center text-md gap-x-2">
							<NavLink to={"/contact"}>Contact</NavLink>
						</li>
						<li className="flex items-center text-md gap-x-2">
							<NavLink to={"/projects"}>Projects</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
