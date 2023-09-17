import { visitiedCountriesData } from "../../data/visited_countries";
import { bucketCountriesData } from "../../data/bucket_countries";
import TravelInfo from "../../components/about/TravelInfo";
import TravelMap from "../../components/map/TravelMap";
import "./AboutMap.scss";
import { useState } from "react";
import Modal from "../../components/ui/Modal";
import BucketList from "../../components/about/BucketList";
import { GeoJSONData } from "../../models/MapData";

const visitedcountries: GeoJSONData = {
	type: visitiedCountriesData.type,
	features: visitiedCountriesData.features,
};
const bucketCountries: any = {
	type: bucketCountriesData.type,
	features: bucketCountriesData.features,
};

const bucketList = bucketCountries.features.map(country => country.properties.ADMIN)

console.log(bucketCountries)

const AboutMap = () => {
	const [showBucketList, setShowBucketList] = useState(true);
	return (
		<>
			<section>
				<div className="container AboutMap">
					<TravelInfo
						visitedLength={visitiedCountriesData.features.length}
						bucketListVisitedLength={5}
						bucketListLength={bucketCountriesData.features.length}
					/>
					<TravelMap
						visitedCountries={visitedcountries}
						bucketCountries={bucketCountries}
					/>
				</div>
			</section>
			{/* {showBucketList && (
				<Modal closeAction={() => setShowBucketList(false)}>
					<BucketList countries={bucketList} />
				</Modal>
			)} */}
		</>
	);
};

export default AboutMap;
