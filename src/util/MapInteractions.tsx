import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";

const MapInteractions = () => {
	const map = useMap();

	const [mapZoom, setMapZoom] = useState(0);

	const handleScreenWidth = () => {
		const width = window.innerWidth;

		if (width < 600) {
			setMapZoom(0);
		} else if (width < 992) {
			setMapZoom(1);
		} else {
			setMapZoom(1);
		}
	};

	useEffect(() => {
		handleScreenWidth();

		window.addEventListener("resize", function (event) {
			handleScreenWidth();
		});
	}, []);

	useEffect(() => {
		mapZoom > 1 ? map.setMinZoom(1) :  map.setMinZoom(mapZoom);
		map.setZoom(mapZoom);
	}, [mapZoom]);

	return <></>;
};

export default MapInteractions;
