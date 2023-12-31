import Button from "../ui/Button";
import "./Contact.scss";

const Contact = () => {
	const contactMeClicked = () => {
		const mailToLink = "mailto:paul-mckeown@hotmail.com";
		// Open the link in a new window or tab
		// window.open(mailToLink);
		window.location.href = mailToLink;
	};

	return (
		<section id="contact" className="Contact">
			<div className="container">
				<h2 className="section-title">Get In Touch</h2>
				<p className="section-subheading">
					Feel free to contact me if you want to know more, meet me to
					discuss ideas, or work with me. You may also reach out to me
					via social media.
				</p>
				<Button onClick={contactMeClicked} className="Home__button">
					Contact Me
				</Button>
			</div>
		</section>
	);
};

export default Contact;
