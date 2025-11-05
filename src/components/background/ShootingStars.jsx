import React from "react";
import "./ShootingStars.scss";

function ShootingStars() {
	const stars = Array.from({ length: 20 });

	return (
		<div className="stars-background">
			<div className="stars">
				{stars.map((_, i) => (
					<div key={i} className="star"></div>
				))}
			</div>
		</div>
	);
}

export default ShootingStars;
