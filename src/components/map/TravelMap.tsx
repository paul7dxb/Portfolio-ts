import { LatLng, LatLngBounds } from 'leaflet';
import './TravelMap.scss'
import MapInteractions from '../../util/MapInteractions';
import { MapContainer, GeoJSON, LayersControl } from 'react-leaflet';

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

const southWest = new LatLng(-65, -185);
const northEast = new LatLng(90, 185);
const bounds = new LatLngBounds(southWest, northEast);


interface TravelMapProps {
    visitedCountries : any
    bucketCountries : any
}

const TravelMap = ({visitedCountries, bucketCountries} : TravelMapProps) => {
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
							<LayersControl.Overlay name="Visited Countries">
								<GeoJSON
									key="visited"
									data={visitedCountries}
									style={bucketStyle}
								/>
							</LayersControl.Overlay>
							<LayersControl.Overlay
								checked
								name="Bucket List Countries"
							>
								<GeoJSON
									key="bucketList"
									data={bucketCountries}
									style={style}
								/>
							</LayersControl.Overlay>
						</LayersControl>
					</MapContainer>
				</div>
)
}

export default TravelMap