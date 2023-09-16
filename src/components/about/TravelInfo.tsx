import Fraction from "../ui/Fraction";
import "./TravelInfo.scss";

interface TravelInfoProps {
    visitedLength: number;
    bucketListVisitedLength: number;
    bucketListLength: number;
}

const TravelInfo = ({visitedLength, bucketListVisitedLength, bucketListLength} : TravelInfoProps) => {
	return (
        <div className="TravelInfo">

		<div className="TravelInfo__Stat">
			<h3>Visited Countries</h3>
            <Fraction numerator={visitedLength} denominator={195} />
		</div>
		<div className="TravelInfo__Stat">
			<h3>Bucket List</h3>
            <Fraction numerator={bucketListVisitedLength} denominator={bucketListLength} />
		</div>
        </div>
	);
};

export default TravelInfo;
