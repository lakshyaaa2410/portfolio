import { Route, Routes } from "react-router";

import {
	ShootingStars,
	Navbar,
	Landing,
	About,
	Contact,
	Projects,
} from "./components";

import useDynamicTitle from "./hooks/useDynamicTitles";

function App() {
	useDynamicTitle();
	return (
		<section id="heroSection" className=" pt-4 min-h-screen">
			<ShootingStars />
			<Navbar />
			<main className="max-w-5xl mx-auto p-4">
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</main>
		</section>
	);
}

export default App;
