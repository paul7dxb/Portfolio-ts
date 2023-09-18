import "./BucketList.scss";

interface BucketListProps {
	countries: { name: string; visited?: boolean }[];
}

const BucketList = ({ countries }: BucketListProps) => {
	console.log(countries);
	return (
		<div className="BucketList">
			<h2 className="BucketList__Title">BUCKET LIST</h2>
			<p className="BucketList__Country">&nbsp;</p>
			{countries &&
				countries.map((country) => (
					<p key={country.name}
						className={`BucketList__Country ${
							country.visited
								? "BucketList__Country--visited"
								: ""
						}`}
					>
						<span className="BucketList__Country__Text">{country.name}</span>
					</p>
				))}
			<p className="BucketList__Country">&nbsp;</p>
		</div>
	);
};

export default BucketList;
