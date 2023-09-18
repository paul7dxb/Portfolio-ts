import { visitiedCountriesData } from "../../data/visited_countries";
import { bucketCountriesData } from "../../data/bucket_countries";
import TravelInfo from "../../components/about/TravelInfo";
import TravelMap from "../../components/map/TravelMap";
import { useState } from "react";
import { GeoJSONData, GeoJSONDataFeatures } from "../../models/MapData";
import Modal from "../../components/ui/Modal";
import BucketList from "../../components/about/BucketList";
import "./AboutMap.scss";
import AboutTravel from "./AboutTravel";

const visitedcountries: GeoJSONData = {
	type: visitiedCountriesData.type,
	features: visitiedCountriesData.features,
};
const bucketCountries: any = {
	type: bucketCountriesData.type,
	features: bucketCountriesData.features,
};

const bucketList = bucketCountries.features.map(
	(country: GeoJSONDataFeatures) => ({
		name: country.properties.ADMIN,
		visited: country.properties.visited,
	})
);

console.log("bucketList");
console.log(bucketList);

const AboutMap = () => {
	const [showBucketList, setShowBucketList] = useState(false);
	return (
		<>
			<section>
				<div className="container AboutMap">
					<p className="section-subheading">Travel</p>
					<AboutTravel />
					<TravelInfo
						visitedLength={visitiedCountriesData.features.length}
						bucketListVisitedLength={5}
						bucketListLength={bucketCountriesData.features.length}
						openBucketListAction={() => setShowBucketList(true)}
					/>
					<TravelMap
						visitedCountries={visitedcountries}
						bucketCountries={bucketCountries}
					/>
				</div>
				{showBucketList && (
					<Modal closeAction={() => setShowBucketList(false)}>
						<BucketList countries={bucketList} />
					</Modal>
				)}
			</section>
		</>
	);
};

export default AboutMap;
