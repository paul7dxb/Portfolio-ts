import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.scss";

const Footer = () => {
	return (
		<footer>
			<section>
				<ul className="Footer__List">
					<li>
						<a
							href="https://www.linkedin.com/in/paul-a-mckeown/"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon
								icon={faLinkedin}
								className="Footer__Icon"
							/>
						</a>
					</li>
					<li>
						<a
							href="https://github.com/paul7dxb"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon
								icon={faGithub}
								className="Footer__Icon"
							/>
							{/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
						</a>
					</li>
					<li>
						<a
							href="mailto:paul-mckeown@hotmail.com"
							rel="noreferrer"
							target="_blank"
						>
							<FontAwesomeIcon
								icon={faEnvelope}
								className="Footer__Icon"
							/>
						</a>
					</li>
				</ul>
			</section>
		</footer>
	);
};

export default Footer;
