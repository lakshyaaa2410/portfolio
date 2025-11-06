import React from "react";
import { Router, Link, NavLink } from "react-router";

const navLinks = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Projects", path: "/projects" },
	{ name: "Contact", path: "/contact" },
];

function Navbar() {
	return (
		<nav className="block w-full max-w-5xl p-4 mx-auto bg-transparent rounded-2xl shadow-md mb-4 z-20">
			<div className="container flex flex-wrap items-center justify-between mx-auto text-white">
				<NavLink>
					<img
						className="h-10 transition-all duration-300 hover:scale-110 hover:brightness-125"
						src="/Favicon/favicon.ico"
						alt="Lakshya Choudhary"
					/>
				</NavLink>

				<div className="my-auto">
					<ul className="flex flex-row gap-8">
						{navLinks.map((item) => (
							<li key={item.name} className="flex items-center">
								<NavLink
									to={item.path}
									className={({ isActive }) =>
										`
          inline-block pb-1 transition-transform duration-200 brightness-100 
          ${
				isActive
					? "text-white font-semibold border-b-2 border-white"
					: "text-white border-b-2 border-transparent hover:scale-110 hover:brightness-125"
			}
          `
									}
								>
									{item.name}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
