import "./ScrollButton.scss";
import scrollDown from "../../assets/scroll-down.svg";

interface ScrollButtonProps {
	reference: React.RefObject<HTMLInputElement>;
}

const ScrollButton = ({ reference }: ScrollButtonProps) => {
	function handleScroll() {
		reference.current?.scrollIntoView({behavior: "smooth" });
	}

	return (
		<button className="ScrollButton" type="button" onClick={handleScroll}>
			<img className="ScrollButton__image" src={scrollDown} alt="Scroll to next section" rel="preload" />
		</button>
	);
};

export default ScrollButton;
