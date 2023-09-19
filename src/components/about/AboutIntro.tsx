import "./AboutIntro.scss";

const AboutIntro = () => {
	return (
		<>
			<section className="AboutIntro section-dark">
				<div className="container ">
					<h2 className="section-title">
						So you want to know more about me?
					</h2>
					<p className="section-subheading">
						As much as I love programming...
					</p>
					<p className="section-paragraph">
						Some interesting topic about me that's not programming
						related (all ideas welcome). Lorem Ipsum is simply dummy
						text of the printing and typesetting industry. Lorem
						Ipsum has been the industry's standard dummy text ever
						since the 1500s, when an unknown printer took a galley
						of type and scrambled it to make a type specimen book.
					</p>
					<p className="section-paragraph">
						It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and
						more recently with desktop publishing software like
						Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</div>
			</section>
		</>
	);
};

export default AboutIntro;
