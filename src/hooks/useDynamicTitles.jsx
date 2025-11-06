import { useEffect } from "react";
import { useLocation } from "react-router";

function useDynamicTitle() {
	const location = useLocation();

	useEffect(() => {
		const path = location.pathname;

		switch (path) {
			case "/about":
				document.title = "About | Lakshya Choudhary";
				break;
			case "/projects":
				document.title = "Projects | Lakshya Choudhary";
				break;
			case "/contact":
				document.title = "Contact | Lakshya Choudhary";
				break;
			default:
				document.title = "Lakshya Choudhary";
		}
	}, [location]);
}

export default useDynamicTitle;
