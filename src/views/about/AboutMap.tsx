import { MapContainer, TileLayer, useMap, Marker, Popup, GeoJSON } from "react-leaflet";
import { visitiedCountriesData } from "../../data/visited_countries";

import "./AboutMap.scss";

const visitedCountries = visitiedCountriesData.features;

const style = (feature: any) => {
    console.log("featrue", feature);
    return {
      fillColor: "blue",
      weight: 0.3,
      opacity: 1,
      color: "purple",
      dashArray: "3",
      fillOpacity: 0.5
    };
  };



  const newcountries: any = { type: visitiedCountriesData.type, features: visitiedCountriesData.features };

const AboutMap = () => {

	return (
		<section>
			<div className="container AboutMap">
				<h1>About Map</h1>
				<div className="AboutMap__LeafletContainer">
					<MapContainer className="AboutMap__LeafletContainer__MapContainer"
						center={[30, -0.144754]}
						zoom={2}
						// scrollWheelZoom={false}
						style={{
							height: "100%",
							position: "absolute",
                            width: "100%",
                            top: "0px",
                            left: "0px",
						}}
					>
						{/* <TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/> */}
						{/* <Marker position={[51.505, -0.09]}>
							<Popup>
								A pretty CSS3 popup. <br /> Easily customizable.
							</Popup>
						</Marker> */}
                        <GeoJSON key="visited" data={ newcountries } style={style} />
					</MapContainer>
				</div>
			</div>
		</section>
	);
};

export default AboutMap;
