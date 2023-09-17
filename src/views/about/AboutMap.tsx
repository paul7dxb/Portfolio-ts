import { visitiedCountriesData } from "../../data/visited_countries";
import { bucketCountriesData } from "../../data/bucket_countries";
import TravelInfo from "../../components/about/TravelInfo";
import TravelMap from "../../components/map/TravelMap";
import "./AboutMap.scss";

const visitedcountries: any = {
	type: visitiedCountriesData.type,
	features: visitiedCountriesData.features,
};
const bucketCountries: any = {
	type: bucketCountriesData.type,
	features: bucketCountriesData.features,
};

const AboutMap = () => {
	return (
		<section>
			<div className="container AboutMap">
				<TravelInfo
					visitedLength={visitiedCountriesData.features.length}
					bucketListVisitedLength={5}
					bucketListLength={10}
				/>
				<TravelMap
					visitedCountries={visitedcountries}
					bucketCountries={bucketCountries}
				/>
			</div>
		</section>
	);
};

export default AboutMap;
