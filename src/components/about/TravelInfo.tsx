import Fraction from "../ui/Fraction";
import expandIcon from "../../assets/expandIcon.svg";

import "./TravelInfo.scss";

interface TravelInfoProps {
    visitedLength: number;
    bucketListVisitedLength: number;
    bucketListLength: number;
	openBucketListAction: () => void;
}

const TravelInfo = ({visitedLength, bucketListVisitedLength, bucketListLength, openBucketListAction} : TravelInfoProps) => {
	return (
        <div className="TravelInfo">

		<div className="TravelInfo__Stat">
			<h3 className="TravelInfo__Stat__Title">Visited Countries</h3>
            <Fraction numerator={visitedLength} denominator={195} />
		</div>
		<div className="TravelInfo__Stat">
			<h3 className="TravelInfo__Stat__Title">Bucket List</h3>
			<img className="TravelInfo__Bucket__Expand" src={expandIcon} alt="expand" onClick={openBucketListAction} />
            <Fraction numerator={bucketListVisitedLength} denominator={bucketListLength} />
		</div>
        </div>
	);
};

export default TravelInfo;
