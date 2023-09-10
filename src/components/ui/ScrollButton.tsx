import "./ScrollButton.scss";
import scrollDown from "../../assets/scroll-down.svg";

interface ScrollButtonProps {
	reference: React.RefObject<HTMLInputElement>;
}

const ScrollButton = ({ reference }: ScrollButtonProps) => {
	function handleScroll() {
		// window.scroll({
		// //   top: document.body.offsetHeight,
		//   top: 0,
		//   left: 0,
		//   behavior: 'smooth',
		// });
		console.log("bescrolling");
		reference.current?.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<button className="ScrollButton" type="button" onClick={handleScroll}>
			<img className="ScrollButton__image" src={scrollDown} alt="Scroll to next section" />
		</button>
	);
};

export default ScrollButton;
