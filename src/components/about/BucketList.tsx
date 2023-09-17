import "./BucketList.scss";

interface BucketListProps{
    countries : string[]
}

const BucketList = ({countries} : BucketListProps) => {
	return (
		<div className="BucketList">
			<h2 className="BucketList">BUCKET LIST</h2>
            {countries && countries.map(country => <p>{country}</p> )}
		</div>
	);
};

export default BucketList;
