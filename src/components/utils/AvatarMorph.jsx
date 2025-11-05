import React, { useEffect, useState } from "react";

function AvatarMorph() {
	const images = ["/Hero.png", "/Hero1.png", "/Hero2.png"];
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % images.length);
		}, 3000);
		return () => clearInterval(interval);
	}, [images.length]);

	return (
		<div className="relative h-100 w-full flex justify-end items-center">
			{images.map((src, i) => (
				<img
					key={i}
					src={src}
					alt="memoji"
					className={`absolute right-0 h-100 object-contain transition-all duration-700 ease-in-out ${
						i === index
							? "opacity-100 scale-100"
							: "opacity-0 scale-95"
					}`}
				/>
			))}
		</div>
	);
}

export default AvatarMorph;
