import { Route, Routes } from "react-router";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

import ShootingStars from "./components/background/ShootingStars";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
	return (
		<section id="heroSection" className=" pt-4 min-h-screen">
			<ShootingStars />
			<Navbar />
			<main className="max-w-5xl mx-auto p-4">
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</main>
		</section>
	);
}

export default App;
