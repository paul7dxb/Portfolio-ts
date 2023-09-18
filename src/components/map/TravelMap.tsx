import { LatLng, LatLngBounds, Layer } from "leaflet";
import ReactDOMServer from "react-dom/server";
import MapInteractions from "../../util/MapInteractions";
import {
	MapContainer,
	GeoJSON,
	LayersControl,
	LayerGroup,
} from "react-leaflet";
import TravelPopUp from "./TravelPopUp";
import { GeoJSONData } from "../../models/MapData";
import "./TravelMap.scss";

const style = (feature: any) => {
	void feature;
	return {
		fillColor: "#bae8e8",
		weight: 0.3,
		opacity: 1,
		color: "white",
		fillOpacity: 1,
	};
};
const bucketStyle = (feature: any) => {
	void feature;
	return {
		fillColor: "#dfbae8",
		weight: 0.3,
		opacity: 1,
		color: "white",
		fillOpacity: 1,
	};
};

const southWest = new LatLng(-65, -185);
const northEast = new LatLng(90, 185);
const bounds = new LatLngBounds(southWest, northEast);

interface TravelMapProps {
	visitedCountries: GeoJSONData;
	bucketCountries: GeoJSONData;
}

const TravelMap = ({ visitedCountries, bucketCountries }: TravelMapProps) => {
	const handleFeatureClick = (feature: any, layer: Layer) => {
		if (feature.properties) {
			layer.bindPopup(
				ReactDOMServer.renderToString(
					<TravelPopUp country={feature.properties.ADMIN} />
				)
			);
		}
	};

	return (
		<div className="AboutMap__LeafletContainer">
			<MapContainer
				className="AboutMap__LeafletContainer__MapContainer"
				center={[35, 20]}
				minZoom={-2}
				zoom={2}
				maxZoom={5}
				maxBounds={bounds}
				maxBoundsViscosity={0.9}
				// scrollWheelZoom={false}
				style={{
					height: "100%",
					position: "absolute",
					width: "100%",
					top: "0px",
					left: "0px",
				}}
			>
				<MapInteractions />

				<LayersControl position="topright">
					<LayersControl.Overlay checked name="Bucket List Countries">
						<LayerGroup>
							{bucketCountries.features?.map(
								(country: any, i: number) => {
									return (
										<GeoJSON
											key={i}
											data={country}
											style={bucketStyle}
											onEachFeature={handleFeatureClick}
										/>
									);
								}
							)}
						</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="Visited Countries">
						<LayerGroup>
							{visitedCountries.features?.map(
								(country: any, i: number) => {
									return (
										<GeoJSON
											key={i}
											data={country}
											style={style}
											onEachFeature={handleFeatureClick}
										/>
									);
								}
							)}
						</LayerGroup>
					</LayersControl.Overlay>
				</LayersControl>
			</MapContainer>
		</div>
	);
};

export default TravelMap;
