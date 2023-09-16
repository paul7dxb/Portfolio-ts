import { MapContainer, GeoJSON } from "react-leaflet";
import { visitiedCountriesData } from "../../data/visited_countries";
import { LatLng, LatLngBounds } from "leaflet";
import TravelInfo from "../../components/about/TravelInfo";
import MapInteractions from "../../util/MapInteractions";
import "./AboutMap.scss";
import { bucketCountriesData } from "../../data/bucket_countries";

const style = (feature: any) => {
	console.log("featrue", feature);
	return {
		fillColor: "#bae8e8",
		weight: 0.3,
		opacity: 1,
		color: "white",
		fillOpacity: 1,
	};
};
const bucketStyle = (feature: any) => {
	console.log("featrue", feature);
	return {
		fillColor: "#dfbae8",
		weight: 0.3,
		opacity: 1,
		color: "white",
		fillOpacity: 1,
	};
};

const newcountries: any = {
	type: visitiedCountriesData.type,
	features: visitiedCountriesData.features,
};
const bucketCountries: any = {
	type: bucketCountriesData.type,
	features: bucketCountriesData.features,
};

const southWest = new LatLng(-90, -180);
const northEast = new LatLng(90, 180);
const bounds = new LatLngBounds(southWest, northEast);

const AboutMap = () => {

	return (
		<section>
			<div className="container AboutMap">
				<TravelInfo
					visitedLength={visitiedCountriesData.features.length}
					bucketListVisitedLength={5}
					bucketListLength={10}
				/>
				<div className="AboutMap__LeafletContainer">
					<MapContainer
						className="AboutMap__LeafletContainer__MapContainer"
						center={[30, -0.144754]}
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
						<GeoJSON
							key="visited"
							data={newcountries}
							style={style}
						/>
						<GeoJSON
							key="visited"
							data={bucketCountries}
							style={bucketStyle}
						/>
					</MapContainer>
				</div>
			</div>
		</section>
	);
};

export default AboutMap;
