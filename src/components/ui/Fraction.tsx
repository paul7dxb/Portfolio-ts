import "./Fraction.scss";

interface FractionProps {
    numerator: number,
    denominator: number
}

const Fraction = ({numerator, denominator} : FractionProps) => {
	return (
		<div className="Fraction">
			<p className="Fraction__Numerator" >{numerator}</p>
            <p className="Fraction__Denominator">{denominator}</p>
		</div>
	);
};

export default Fraction;
