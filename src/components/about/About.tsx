import "./About.scss";

interface AboutProps {
	scrollToRef?: React.RefObject<HTMLInputElement>;
}

const About = ({ scrollToRef }: AboutProps) => {
	return (
		<section ref={scrollToRef} id="about" className="About">
			<div className="container">
				<h2 className="section-title">Hi, my name is Paul.</h2>
				<p className="section-subheading">
					Thanks for coming. I'm a software developer and former
					network engineer living in England.
				</p>
				<p className="section-paragraph">
					I started my path into development teaching myself web
					technologies and continue to do so as alongside
					collaborating with others on group projects. I'm keen to
					explore new technologies for my next projects and having
					recently discovered pair programming I'm always looking for
					opportunities to go on that adventure as a team.
				</p>
			</div>
		</section>
	);
};
export default About;
