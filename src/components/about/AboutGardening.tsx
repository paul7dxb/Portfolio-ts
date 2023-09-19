import "./AboutGardening.scss";

const AboutGardening = () => {
	return (
		<section className="AboutGardening section-dark">
			<div className="container ">
				<p className="section-subheading">
					My Future...{" "}
					<img
						className="AboutGardening__image"
						src="/images/greenhouse.png"
						alt="Cartoon picture of a greenhouse"
					/>
				</p>
				<p className="section-paragraph">
					At 32 going on 70 my next hobby to take up is going to be
					gardening. While some may consider this pursuit a pastime
					reserved for the silver-haired crowd, I figure why wait
					until retirement to start growing my own bounty of fruits
					and vegetables?
				</p>
			</div>
		</section>
	);
};

export default AboutGardening;
