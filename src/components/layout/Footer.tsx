const Footer = () => {
	return (
		<footer>
			<div itemScope itemType="https://schema.org/Person">
				<p itemProp="name">Paul McKeown</p>
				<span itemProp="jobTitle">Developer</span>
				<div
					itemProp="address"
					itemScope
					itemType="https://schema.org/PostalAddress"
				>
					<span itemProp="addressLocality">Tunbridge Wells</span>, <span itemProp="addressRegion">Kent</span>
				</div>
				<p>
					Contact: <a href="mailto:paul-mckeown@hotmail.com" itemProp="email">
						paul-mckeown@hotmail.com
					</a>
				</p>
				<a href="http://www.paulmck.dev" itemProp="url">
					Home
				</a>
			</div>
		</footer>
	);
};

export default Footer;
